package com.bookmart.categories.controller;

import java.io.IOException;


import java.sql.SQLException;
import java.util.List;


import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bookmart.categories.model.Category;
import com.bookmart.categories.repository.CategoriesRepository;
import com.bookmart.categories.service.CategoriesService;

@RestController
@CrossOrigin
public class CategoriesController {
	
	
	@Autowired
	CategoriesService categoriesService;
	
	
	@Autowired
	CategoriesRepository categoriesRepository;
	
	
//	@PostMapping("/save/category")
//	public Category saveCategory( @RequestParam("file") MultipartFile file,@RequestParam("name") String category_name) throws SerialException, SQLException, IOException {
//		return categoriesService.createCategory(category_name, file);
//	}
//	
//	@GetMapping("/all")
//	public List<Category> getAll(){
//		return categoriesService.getAllCategories();
//	}
//	
	
	@PostMapping("/upload")
	public String upload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        return categoriesService.uploadFile(multipartFile);
    }
	
	
	@PostMapping("/category/save")
	public String createCategory(@RequestParam("name") String categoryName, @RequestParam("description") String description ,@RequestParam("file") MultipartFile file) throws IOException {
		return categoriesService.createCategory(categoryName,description, file);
	}
	
	
	@GetMapping("/category/all")
	public List<Category> getAllCategories(){
		return categoriesService.getAllCategories();
	}
	
	@GetMapping("/categories/category/{name}")
	public Category getCategory(@PathVariable String name) {
		return categoriesService.getCategory(name);
	}
	

}
