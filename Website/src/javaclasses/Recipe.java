package javaclasses;

import java.util.List;

public class Recipe {

    
    private String name;
    private String date;//day it was created
    private String cuisineType;//should this be its own enum?
    private String cookTime;
    private List<Ingredient> ingredients;
    private List<String> directions;


    public Recipe() {
        
    }

}
