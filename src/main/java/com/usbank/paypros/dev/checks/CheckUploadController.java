package com.usbank.paypros.dev.checks;

import com.azure.storage.blob.BlobClientBuilder;
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.azure.storage.blob.sas.BlobSasPermission;
import com.azure.storage.blob.sas.BlobServiceSasSignatureValues;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.UUID;

@RestController
public class CheckUploadController {

    @Value("${azure.storage.connection-string}")
    private String connectionString;

    @Value("${azure.storage.container-name}")
    private String containerName;

    @PostMapping("/upload-check")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            // Generate a unique name for the image
            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();

            // Create a BlobClient
            BlobClientBuilder blobClientBuilder = new BlobClientBuilder()
                    .connectionString(connectionString)
                    .containerName(containerName)
                    .blobName(fileName);

            // Upload the file to Azure Blob Storage
            blobClientBuilder.buildClient().upload(file.getInputStream(), file.getSize(), true);

            // Set the content type
            blobClientBuilder.buildClient().setHttpHeaders(new BlobHttpHeaders().setContentType(file.getContentType()));

            // Generate SAS token
            BlobSasPermission blobSasPermission = new BlobSasPermission().setReadPermission(true);
            OffsetDateTime expiryTime = OffsetDateTime.now().plusHours(1);
            BlobServiceSasSignatureValues values = new BlobServiceSasSignatureValues(expiryTime, blobSasPermission);
            String sasToken = blobClientBuilder.buildClient().generateSas(values);

            // Get the SAS URL of the uploaded image
            String sasUrl = blobClientBuilder.buildClient().getBlobUrl() + "?" + sasToken;

            return new ResponseEntity<>(sasUrl, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}