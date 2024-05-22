package javaclasses;

public class Comment {

    private int voteCount;
    private String text;
    private User author;
    private List<Comment> comments;

    public Comment(){
        this.voteCount = 0;
        this.comments = new ArrayList<>();
    }

    public Comment(String text) {
        this.text = text;//Do we need a char limit?
        this.voteCount = 0;
        this.author = author;
        this.comments = new ArrayList<>();
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

    public User getAuthor(){ return this.author; }

    public void setAuthor(User author) { this.author = author; }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments){
        this.comments = comments;
    }

    public void addComment(Comment comment){
        this.comments.add(comment)
    }

    public String toString(){
        return "Comment{" +
                "voteCount+" + voteCount +
                ", text+'" + text + '\'' +
                ", author=" + author +
                ", comments=" + comments +
                '}';
    }
    

}
