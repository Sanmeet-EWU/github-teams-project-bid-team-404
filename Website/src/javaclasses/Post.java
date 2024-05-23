package javaclasses;

import java.util.ArrayList;
import java.util.List;

public class Post {

    private String title;//title of the post (name)
    private User author;//username of who created post
    private int voteCount;//up/down vote
    private Recipe recipe;
    private List<Comment> comments;

    public Post(){
        this.voteCount = 0;
        this.comments = new ArrayList<Comment>();
    }

    public Post(String title, User author, int voteCount, Recipe recipe, List<Comment> comments) {
        this.title = title;
        this.author = author;
        this.voteCount = 0;
        this.recipe = recipe;
        this.comments = new ArrayList<Comment>();
    }

    public void upVote() {
        voteCount++;
    }

    public void downVote() {
        voteCount--;
    }

    //Getters and Setters
    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getAuthor() {
        return this.author;
    }

    public void setAuthor(User author) {
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

    public List<Comment> getComments() {
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
