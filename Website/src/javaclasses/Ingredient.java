package javaclasses;

public class Ingredient {

    private String name;
    private float amount;//needs unit, probaby make an enum
    //Should allergies be stored here?

    public Ingredient(String name, float amount) {
        this.name = name;
        this.amount = amount;
    }


//Getters and Setters
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getAmount() {
        return this.amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

}
