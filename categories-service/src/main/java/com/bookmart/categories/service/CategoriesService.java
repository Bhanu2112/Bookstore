package com.bookmart.categories.service;



import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bookmart.categories.model.Category;
import com.bookmart.categories.repository.CategoriesRepository;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Bucket;

import com.google.firebase.cloud.StorageClient;

@Service
public class CategoriesService {
	

	@Autowired
	CategoriesRepository categoriesRepository;

	public String uploadFile(MultipartFile multipartFile) throws IOException {
		Bucket bucket = StorageClient.getInstance().bucket();
		String blobString = UUID.randomUUID().toString()+"_"+multipartFile.getOriginalFilename();
		Blob blob = bucket.create(blobString, multipartFile.getInputStream(), multipartFile.getContentType());
		
		String downloadToken = UUID.randomUUID().toString();
		

		BlobId blobId = BlobId.of(bucket.getName(), multipartFile.getOriginalFilename());
		BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
				.setContentType(multipartFile.getContentType())
				.build();
	
		System.out.println(downloadToken);
		
//		String downloadLink = String.format("https://firebasestorage.googleapis.com/v0/b/%s/o/%s?alt=media&token=%s", 
//				bucket.getName(),
//				blob.getName(),
//				downloadToken
//				
//				);
		String downloadLink = String.format("https://firebasestorage.googleapis.com/v0/b/%s/o/%s?alt=media", 
				bucket.getName(),
				blob.getName()
				
				
				);
		
		return downloadLink;
	}
	
	
	public String createCategory(String categoryName,String description , MultipartFile file) throws IOException {
		
		try {
		Category category = new Category();
		category.setName(categoryName);
		category.setCategory_img(uploadFile(file));
		category.setDescription(description);
		category.setUpdatedDate(new Date());
		categoriesRepository.save(category);
			return "Category created succesfully";
		}catch (Exception e) {
			return e.getMessage();
		}
		
		
	}
	
	
	public List<Category> getAllCategories(){
		return categoriesRepository.findAll();
	}
	
	
	public Category getCategory(String name) {
		return categoriesRepository.findByName(name);
	}

}
