package com.biteshare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biteshare.model.Recipe;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;

@Service
public class RecipeService {

    @Autowired
    private Firestore firestore;

    private static final String COLLECTION_NAME = "recipes";

    public ApiFuture<WriteResult> saveRecipe(Recipe recipe) {
        return firestore.collection(COLLECTION_NAME).document(recipe.getId()).set(recipe);
    }

    public ApiFuture<QuerySnapshot> getAllRecipes() {
        return firestore.collection(COLLECTION_NAME).get();
    }

    public ApiFuture<WriteResult> deleteRecipe(String id) {
        return firestore.collection(COLLECTION_NAME).document(id).delete();
    }
}
