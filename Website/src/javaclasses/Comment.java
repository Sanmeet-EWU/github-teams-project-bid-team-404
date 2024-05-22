package javaclasses;

public class Comment {

    private int voteCount;
    private String text;

 
    public Comment(String text) {
        this.text = text;//Do we need a char limit?
        this.voteCount = 0;
    }


//Getters and Setters
    public int getVoteCount() {
        return this.voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }
    

}
