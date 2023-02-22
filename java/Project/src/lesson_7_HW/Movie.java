package lesson_7_HW;

public class Movie {
    String name;

    String publishDate;

    String genre;

    public Movie(String name, String publishDate, String genre) {
        this.name = name;
        this.publishDate = publishDate;
        this.genre = genre;
    }

    public String toString(){
        return
                "name" + this.name + '\'' +
                 "Date" + this.publishDate + '\'' +
                 "Genre" + this.genre;


    }

}
