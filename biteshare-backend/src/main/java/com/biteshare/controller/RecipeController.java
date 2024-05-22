package com.biteshare.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.biteshare.model.Recipe;
import com.biteshare.service.RecipeService;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping
    public ApiFuture<WriteResult> saveRecipe(@RequestBody Recipe recipe) {
        System.out.println("saveRecipe method called with recipe: " + recipe);
        return recipeService.saveRecipe(recipe);
    }

    @GetMapping
    public List<Recipe> getAllRecipes() throws ExecutionException, InterruptedException {
        System.out.println("getAllRecipes method called");
        ApiFuture<QuerySnapshot> future = recipeService.getAllRecipes();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        System.out.println("Retrieved documents: " + documents.size());
        return documents.stream().map(doc -> {
            Recipe recipe = doc.toObject(Recipe.class);
            System.out.println("Mapped recipe: " + recipe);
            return recipe;
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public ApiFuture<WriteResult> deleteRecipe(@PathVariable String id) {
        System.out.println("deleteRecipe method called with id: " + id);
        return recipeService.deleteRecipe(id);
    }
}
