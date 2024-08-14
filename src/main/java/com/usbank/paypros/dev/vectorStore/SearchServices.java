package com.usbank.paypros.dev.vectorStore;

import com.azure.ai.openai.OpenAIClient;
import com.azure.ai.openai.OpenAIClientBuilder;
import com.azure.core.credential.AzureKeyCredential;
import com.azure.search.documents.indexes.SearchIndexClient;
import com.azure.search.documents.indexes.SearchIndexClientBuilder;
import org.springframework.ai.azure.openai.AzureOpenAiEmbeddingModel;
import org.springframework.ai.document.Document;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.azure.AzureVectorStore;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Map;

public class SearchServices {

    private SearchIndexClient SearchIndexClient = searchIndexClient();

    private OpenAIClient openAIClient = new OpenAIClientBuilder()
            .credential(new AzureKeyCredential(""))
            .endpoint("https://customerserviceopenai.openai.azure.com/")
            .buildClient();

    private EmbeddingModel embeddingModel = new AzureOpenAiEmbeddingModel(openAIClient);

    @Bean
    public SearchIndexClient searchIndexClient() {
        return new SearchIndexClientBuilder().endpoint("https://searchtestforpaypros.search.windows.net")
                .credential(new AzureKeyCredential(""))
                .buildClient();
    }

    @Bean
    public AzureVectorStore azureVectorStore(SearchIndexClient searchIndexClient, EmbeddingModel embeddingModel) {
        AzureVectorStore azureVectorStore = new AzureVectorStore(searchIndexClient, embeddingModel, true,
                // Define the metadata fields to be used
                // in the similarity search filters.
                List.of(AzureVectorStore.MetadataField.int64("accountNumber"),
                        AzureVectorStore.MetadataField.text("address"),
                        AzureVectorStore.MetadataField.bool("active")));
        azureVectorStore.setDefaultTopK(4);
        azureVectorStore.setIndexName("email-processor");
        azureVectorStore.setDefaultSimilarityThreshold(0.0);
        return azureVectorStore;
    }

    public AzureVectorStore getVectorStore() {
        return vectorStore;
    }

    private AzureVectorStore vectorStore = azureVectorStore(SearchIndexClient, embeddingModel);

    public static void main(String[] args) {
        List<Document> documents = List.of(
                new Document("User account A test: hello world.", Map.of("accountNumber", "110985520", "address", "123 Main St.", "active", true)),
                new Document("User account B test."),
                new Document("User account C test.", Map.of("accountNumber", "150922138", "address", "456 Elm St.", "active", false)));
        SearchServices searchServices = new SearchServices();
        AzureVectorStore vectorStore = searchServices.getVectorStore();
        vectorStore.add(documents);
        List<Document> results = vectorStore.similaritySearch(
                SearchRequest
                        .query("hello world")
                        .withTopK(5));
        for (Document result : results) {
            System.out.println(result.getContent());
        }
    }
}
