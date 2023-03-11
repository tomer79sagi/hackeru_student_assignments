package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class Song {
    String title;
    String artist;
    float duration;

    public Song (String title , String artist , float duration){
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    public void songDetails(){
        System.out.println("Title: " + this.title);
        System.out.println("Artist: " + this.artist);
        System.out.println("Duration: " + this.duration);
    }

    public String toString(){
        return "The title of the song is: " + this.title + "\n" +
                "from: " + this.artist + "\n" + "time: " + this.duration;
    }
}
