package javaLerning.src.H_W_F_P.java15__15_3_23.page13;

import java.util.ArrayList;

import static javaLerning.src.myColors.MyColors.*;

public class BookStore {
    public static void main(String[] args) {
        ArrayList <Book> books = new ArrayList<>();

        Book book1 = new Book(1 , "run", "Rubin");
        Book book2 = new Book(1 , "fear", "Tom");
        Book book3 = new Book(2 , "scream", "Mike");
        Book book4 = new Book(2 , "scream", "Dolly");
        Book book5 = new Book(3 , "Reality", "Jon");
        Book book6 = new Book(3 , "Reality", "Jon");

        books.add(book1);
        books.add(book2);
        books.add(book3);
        books.add(book4);
        books.add(book5);
        books.add(book6);

        Book book = new Book(3 , "Reality", "Jon");
        books.forEach(System.out::println);

        System.out.println(RED + "same book");
        System.out.println(GREEN);


        books
                .stream()
                .filter(b -> b.equals(book))
                .forEach(System.out::println);
    }
}
