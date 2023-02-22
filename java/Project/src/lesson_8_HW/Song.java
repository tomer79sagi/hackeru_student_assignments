package lesson_8_HW;

public class Song {
    String title;
    String artist;

    int duration;


    public Song(String title, String artist, int duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    public String toString(){
        return "Title :" + this.title + "Artist :" + this.artist + "duration" + this.duration;
    }
}
