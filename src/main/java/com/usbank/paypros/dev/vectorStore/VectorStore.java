package com.usbank.paypros.dev.vectorStore;

import com.azure.core.credential.AzureKeyCredential;
import com.azure.search.documents.indexes.SearchIndexClient;
import com.azure.search.documents.indexes.SearchIndexClientBuilder;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.azure.AzureVectorStore;
import org.springframework.context.annotation.Bean;

import java.util.List;

public class VectorStore {
    @Bean
    public SearchIndexClient searchIndexClient() {
        return new SearchIndexClientBuilder().endpoint(System.getenv("AZURE_AI_SEARCH_ENDPOINT"))
                .credential(new AzureKeyCredential(System.getenv("AZURE_AI_SEARCH_API_KEY")))
                .buildClient();
    }

    @Bean
    public AzureVectorStore vectorStore(SearchIndexClient searchIndexClient, EmbeddingModel embeddingModel) {
        AzureVectorStore azureVectorStore =  new AzureVectorStore(searchIndexClient, embeddingModel, true,
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
}
