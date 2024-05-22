package javaclasses;

import java.util.ArrayList;

public class Post {

    private String title;//title of the post (name)
    private String author;//username of who created post
    private int voteCount;//up/down vote
    private Recipe recipe;
    private ArrayList<Comment> comments;

    
    public Post(String title, String author, Recipe recipe) {
        this.title = title;
        this.author = author;
        this.voteCount = 0;
        this.recipe = recipe;
        this.comments = new ArrayList<Comment>();
    }



    //Getters and Setters
    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getVoteCount() {
        return this.voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    public Recipe getRecipe() {
        return this.recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public ArrayList<Comment> getComments() {
        return this.comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }

}
