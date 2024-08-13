package com.usbank.paypros.dev.chats;

import org.springframework.ai.azure.openai.AzureOpenAiChatOptions;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.chat.prompt.SystemPromptTemplate;
import org.springframework.ai.converter.ListOutputConverter;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Service
public class ChatsService {

    private final ChatModel chatModel;
    private final ListOutputConverter outputConverter = new ListOutputConverter(new DefaultConversionService());

    private static final String SYSTEM_MESSAGE = "You're a Postal Service Manager";
    private static final String USER_MESSAGE = "Is 53186 a valid US Zipcode";

    public ChatsService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping(value = "/chats")
    public List<String> getAllJokes() {
        SystemPromptTemplate systemPromptTemplate = new SystemPromptTemplate(SYSTEM_MESSAGE);
        PromptTemplate userPromptTemplate = new PromptTemplate(USER_MESSAGE, Map.of("format", outputConverter.getFormat()));
        ChatResponse response = chatModel.call(
                new Prompt(
                        List.of(userPromptTemplate.createMessage()),
                        AzureOpenAiChatOptions.builder()
                                .withFunction("validateAccountNumber")
                                .build()
                ));
        return outputConverter.convert(response.getResult().getOutput().getContent());
    }
}
