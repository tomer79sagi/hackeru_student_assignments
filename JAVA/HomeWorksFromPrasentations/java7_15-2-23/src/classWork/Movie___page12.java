package classWork;

import java.util.Arrays;

public class Movie {
    String movieName;
    Short year;
    String genre; //ז'אנר
    String[] cast;

    public Movie(String movieName, Short year, String genre, String[] cast){
        this.movieName = movieName;
        this.year = year;
        this.genre = genre;
        this.cast = new String[]{Arrays.toString(cast)};
    }

    public String toString(){
        return "Title of the movie: " + movieName + "\n" +
                "Year: " + year + "\n" +
                "Genre: " + genre + "\n" +
                "Cast: " + Arrays.toString(cast);
    }
}
