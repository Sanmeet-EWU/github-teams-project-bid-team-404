package javaclasses;

import java.util.ArrayList;

public class Post {

    private String title;//title of the post (name)
    private User author;//username of who created post
    private int voteCount;//up/down vote
    private Recipe recipe;
    private List<Comment> comments;

    public Post(){
        this.voteCount = 0;
        this.comments = new ArrayList<>();
    }

    public Post(String title, User author, int voteCount, Recipe recipe, List<Comment> comments) {
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

    public void addComment(Comment comment){
        this.comments.add(comment);
    }

    public String toString(){
        return "Post{" +
                "title='" + title + '\'' +
                ", author=" + author +
                ", voteCount=" + voteCount +
                ", recipe=" + recipe +
                ", comments=" + comments +
                '}';
    }
}
