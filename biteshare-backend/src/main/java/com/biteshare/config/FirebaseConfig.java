package com.biteshare.config;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseConfig {

    @Bean
    public Firestore firestore() throws IOException {
        FileInputStream serviceAccount = new FileInputStream("src/main/resources/serviceAccountKey.json");

        FirebaseOptions options = FirebaseOptions.builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build();

        FirebaseApp.initializeApp(options);
        return com.google.firebase.cloud.FirestoreClient.getFirestore();
    }
}
