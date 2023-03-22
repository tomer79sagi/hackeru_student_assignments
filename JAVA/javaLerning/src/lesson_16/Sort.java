package javaLerning.src.lesson_16;

import java.util.ArrayList;
import java.util.Collections;
public class Sort {
        public static void main(String[] args) {
//        sortBooks();
            sortStrings();
        }

        private static void sortStrings() {
            ArrayList<String> studentNames = new ArrayList<>();

            studentNames.add("Tomer");
            studentNames.add("Aviad");
            studentNames.add("Shimon");
            studentNames.add("Rashad");
            studentNames.add("Yarin");
            studentNames.add("Or");

            studentNames.forEach(b -> System.out.println(b));
            Collections.sort(studentNames);

            System.out.println("\nSorted");
            studentNames.forEach(b -> System.out.println(b));
        }

        private static void sortBooks() {
            ArrayList<Book> books = new ArrayList<>();

            books.add(new Book(123, "How to catch a fly?", "Eitan Bellin"));
            books.add(new Book(123, "How to catch a fly?", "Eitan Bellin"));
            books.add(new Book(234, "Outliers", "Aviad Vaknin"));
            books.add(new Book(234, "Outliers", "Shimon"));
            books.add(new Book(345, "This or that", "Shimon"));
            books.add(new Book(345, "Catcher in the rye", "Daniel"));

            books.forEach(b -> System.out.println(b));

//        Collections.sort(books);

            System.out.println("Sorted");
            books.forEach(b -> System.out.println(b));
        }
    }

