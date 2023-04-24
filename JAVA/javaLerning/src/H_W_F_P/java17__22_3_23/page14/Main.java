package javaLerning.src.H_W_F_P.java17__22_3_23.page14;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        compareToTest();
    }

    private static void compareToTest() {
        Person p1 = new Person("Tomer", "Sagi", 2);
        Person p2 = new Person("Roi", "Sagi", 1);
        Person p3 = new Person("John", "Sagi", 3);
        Person p4 = new Person("Mike", "Sagi", 4);

        ArrayList<Person> family = new ArrayList<>(List.of(p1, p2, p3, p4));

        System.out.println("\nUnsorted:");
        for (Person p : family) {
            System.out.println(p);
        }

        // Sort using the 'compareTo' method
        Collections.sort(family);

        System.out.println("\nSorted by 'compareTo':");
        for (Person p : family) {
            System.out.println(p);
        }
    }
}
