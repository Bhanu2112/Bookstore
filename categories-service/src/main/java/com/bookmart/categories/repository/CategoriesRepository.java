package com.bookmart.categories.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookmart.categories.model.Category;

@Repository
public interface CategoriesRepository extends JpaRepository<Category, Long> {
	
	public Category findByName(String name);

}
