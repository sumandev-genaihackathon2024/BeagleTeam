package com.usbank.paypros.dev.chats;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;

import java.util.List;
import java.util.function.Function;

@Configuration
public class FunctionConfigurer {

    @Bean
    @Description("Get valid Account Number(s)")
    public Function<AccountNumber, Boolean> validateAccountNumber() {
        return s -> List.of(
                "0014729991743821",
                "0041749992614938"
        ).contains(s.value);
    }

    public record AccountNumber(String value) {}
}
