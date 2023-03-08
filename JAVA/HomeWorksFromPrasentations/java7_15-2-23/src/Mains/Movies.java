package Mains;

import classWork.Movie;

public class Movies {
    public static void main(String[] args) {
        Movie movie1 = new Movie("The Equalizer",
                (short)2014,
                "Action & Crime",
                new String[]{"Denzel Washington", "Marton Csokas", "Chloe Grace Moretz", "and more..."});

        System.out.println(movie1);

        System.out.println("Test");
    }
}
