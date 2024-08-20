package com.usbank.paypros.dev.checks;

import com.azure.ai.documentintelligence.DocumentIntelligenceClient;
import com.azure.ai.documentintelligence.DocumentIntelligenceClientBuilder;
import com.azure.ai.documentintelligence.models.*;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.hc.core5.http.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.UUID;

import com.azure.core.credential.AzureKeyCredential;
import com.azure.core.util.polling.SyncPoller;

@RestController
public class CheckProcessingController {

    private static final String AZURE_API_URL_PLAIN = "https://document-ai1.cognitiveservices.azure.com/";
    private static final String AZURE_API_KEY = "389f4231d5bc440abac9fdc10d96a5d1";

    @PostMapping("/process-check")
    public ResponseEntity<String> processCheck(@RequestBody String urlStr) {
        try {
            // Send the check image to Azure Document Intelligence API
            String extractedDetails = extractCheckDetails(urlStr);
            // Mock processing the payment with extracted details
            String paymentConfirmation = mockPaymentProcessing(extractedDetails);
            return new ResponseEntity<>(paymentConfirmation, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private String extractCheckDetails(String urlStr) throws IOException, ParseException {

        String amount = null;
        String accountNumber = null;
        String routingNumber = null;

        DocumentIntelligenceClient client = new DocumentIntelligenceClientBuilder()
                .credential(new AzureKeyCredential(AZURE_API_KEY))
                .endpoint(AZURE_API_URL_PLAIN)
                .buildClient();

        SyncPoller<AnalyzeResultOperation, AnalyzeResult> analyzeCheckPoller =
                client.beginAnalyzeDocument("prebuilt-check.us", null, null, null, null, null, null, null, new AnalyzeDocumentRequest().setUrlSource(urlStr));

        AnalyzeResult checkResults = analyzeCheckPoller.getFinalResult();

        JsonObject checkResultJson = JsonParser.parseString(checkResults.toJsonString())
                .getAsJsonObject();

        try {
            JsonArray documentsJson = checkResultJson.get("documents").getAsJsonArray();

            // Extract necessary fields from the response
            // expect only one document for check image
            JsonObject fieldsJson = documentsJson.get(0).getAsJsonObject().get("fields").getAsJsonObject();

            System.out.println("NumberAmount: " + fieldsJson.get("NumberAmount").toString());
            JsonElement numberAmountJson = fieldsJson.get("NumberAmount").getAsJsonObject().get("valueNumber");
            amount = numberAmountJson.getAsString();

            JsonObject micrValueJson = fieldsJson.getAsJsonObject().get("MICR").getAsJsonObject().get("valueObject").getAsJsonObject();

            if (micrValueJson == null) {
                // handle the case where account number, routing number, and check number are not separated in MICR
                JsonElement accountRoutingAndCheckNumberJson = micrValueJson.get("content");
                String[] accountRoutingAndCheckNumber = accountRoutingAndCheckNumberJson.getAsString().split("\n");
                if (accountRoutingAndCheckNumber.length >= 2) {
                    routingNumber = accountRoutingAndCheckNumber[0];
                    accountNumber = accountRoutingAndCheckNumber[1];
                } else {
                    accountNumber = accountRoutingAndCheckNumber[0];
                }
            } else {
                // handle the case where we have a well formated MICR
                JsonElement accountNumberJson = micrValueJson.get("AccountNumber").getAsJsonObject().get("content");
                accountNumber = accountNumberJson.getAsString();

                JsonElement routingNumberJson = micrValueJson.get("RoutingNumber").getAsJsonObject().get("content");
                routingNumber = routingNumberJson.getAsString();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Account Number: " + accountNumber + ", Routing Number: " + routingNumber + ", Amount: " + amount;
    }

    private String mockPaymentProcessing (String extractedDetails) {
        // Mock processing payment with the extracted check details
        String paymentId = UUID.randomUUID().toString();
        return "Payment processed successfully. Confirmation Code: " + paymentId + ". Details: " + extractedDetails;
    }
}

