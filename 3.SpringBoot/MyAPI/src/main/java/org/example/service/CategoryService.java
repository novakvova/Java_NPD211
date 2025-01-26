package org.example.service;

import org.example.dto.category.CategoryPostDto;
import org.example.entites.CategoryEntity;
import org.example.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CategoryService {
    //Автоматично робиться Dependency Injection -
    @Autowired
    private ICategoryRepository categoryRepository;

    @Autowired
    private FileService fileService;

    public List<CategoryEntity> getAllCategories() {
        return categoryRepository.findAll();
    }

    public CategoryEntity createCategory(CategoryPostDto dto) {
        var entity = new CategoryEntity();
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setCreationTime(LocalDateTime.now());

        var imagePath = fileService.load(dto.getImageFile());
        entity.setImage(imagePath);
        return categoryRepository.save(entity);
    }
}
