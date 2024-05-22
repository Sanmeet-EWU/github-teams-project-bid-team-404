package javaclasses;

public class Ingredient {

    private String name;
    private double quantity;//needs unit, probaby make an enum
    private String unit;
    //Should allergies be stored here?

    public Ingredient() {}

    public Ingredient(String name, double quantity, String unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }


//Getters and Setters
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getQuantity() {
        return this.quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String toString(){
        return "Ingredient - " + name + ", Quantity - " + quantity + ", Measurement - " + unit;
    }

}
