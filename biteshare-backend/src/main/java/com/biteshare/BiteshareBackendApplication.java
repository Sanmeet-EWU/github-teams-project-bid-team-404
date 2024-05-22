package com.biteshare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class BiteshareBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BiteshareBackendApplication.class, args);
    }
}
