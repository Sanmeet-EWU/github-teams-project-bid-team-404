package javaclasses;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

public class Recipe {

    
    private String name;//name of the recipe
    private String date;//day it was created
    private String cuisineType;//should this be its own enum?
    private String cookTime;
    private ArrayList<Ingredient> ingredients;
    private ArrayList<String> directions;



    public Recipe(String name, String cuisineType, String cookTime, ArrayList<Ingredient> ingredients, ArrayList<String> directions) {
        this.name = name;
        this.date = new SimpleDateFormat("MM/dd/yy 'at' HH:mm z").format(Calendar.getInstance().getTime());;
        this.cuisineType = cuisineType;
        this.cookTime = cookTime;
        this.ingredients = ingredients;
        this.directions = directions;
    }
    


//Getters and Setters
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCuisineType() {
        return this.cuisineType;
    }

    public void setCuisineType(String cuisineType) {
        this.cuisineType = cuisineType;
    }

    public String getCookTime() {
        return this.cookTime;
    }

    public void setCookTime(String cookTime) {
        this.cookTime = cookTime;
    }

    public ArrayList<Ingredient> getIngredients() {
        return this.ingredients;
    }

    public void setIngredients(ArrayList<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public ArrayList<String> getDirections() {
        return this.directions;
    }

    public void setDirections(ArrayList<String> directions) {
        this.directions = directions;
    }


}
