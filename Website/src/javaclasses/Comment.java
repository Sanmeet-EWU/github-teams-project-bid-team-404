package javaclasses;

public class Comment {

    private int likeCount;//TODO: Shoud these be one combined count that can be positive of negative?
    private int dislikeCount;

    private String text;

 
    public Comment(String text) {
        
    }




//Getters and Setters
    public int getLikeCount() {
        return this.likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getDislikeCount() {
        return this.dislikeCount;
    }

    public void setDislikeCount(int dislikeCount) {
        this.dislikeCount = dislikeCount;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }
    

}
