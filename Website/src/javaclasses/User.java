package javaclasses;


public class User {

    private String username;

    private String password;

    //History still needed


    //For initializing new user
    public User(String username, String password) {
        this.username = username;
        this.password = password;//add validaition for safe password
        //Also need email?
    }


//Getters and Setters

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String newUsername) {
        this.username = newUsername;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {//add validaition for safe password
        this.password = password;
    }

}
