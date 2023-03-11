package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

import java.util.Arrays;

public class Movie___page12 {
    String movieName;
    Short year;
    String genre; //ז'אנר
    String[] cast;

    public Movie___page12(String movieName,
                          Short year,
                          String genre,
                          String[] cast)
    {
        this.movieName = movieName;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
    }

    public String toString(){
        return "Title of the movie: " + movieName + "\n" +
                "Year: " + year + "\n" +
                "Genre: " + genre + "\n" +
                "Cast: " + cast;
    }
}
