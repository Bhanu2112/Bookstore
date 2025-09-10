package com.bookmart.categories;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;


@Configuration
public class FirebaseConfig {
	
	
	@Bean
	public FirebaseApp intializeFirebase() throws IOException {
		FileInputStream serviceAccount =
				new FileInputStream("src/main/resources/serviceAccountKey.json");

				FirebaseOptions options = FirebaseOptions.builder()
						.setCredentials(GoogleCredentials.fromStream(serviceAccount))
//						.setStorageBucket("teststorage-b01a4.appspot.com")
						.setStorageBucket("bookmart-447b5.appspot.com")
//						gs://bookmart-447b5.appspot.com
						.build();

				if(FirebaseApp.getApps().isEmpty()) {
					return	FirebaseApp.initializeApp(options);
				}
//			return	FirebaseApp.initializeApp(options);
			return null;	
	}

}
