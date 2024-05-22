package javaclasses;


public class User {

    private String username;
    private String email;
    private String password;

    //History still needed
    public User(){}//Default Constructor

    //For initializing new user
    public User(String username, String password) {
        this.username = username;
        this.password = password;//add validaition for safe password
        this.email = email;
        //Also need email?
    }


//Getters and Setters
    public String getEmail() { return this.email; }

    public void setEmail(String email) { this.email = email; }

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

    public String toString(){
        return "User{" +
                "email='" + email '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}
