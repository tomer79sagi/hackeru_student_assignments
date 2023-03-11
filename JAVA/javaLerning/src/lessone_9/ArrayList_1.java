package javaLerning.src.lessone_9;

import java.util.ArrayList;
public class ArrayList_1 {
    public static void main(String[] args) {
        ArrayList <String> studentNames = new ArrayList <String>();

        // 1. Add elements to ArrayList
        studentNames.add("Tomer"); // add to index 0
        studentNames.add("Shimon"); // add to index 1
        studentNames.add("Eitan"); // add to index 2
        studentNames.add("Daniel"); // add to index 3

        // 2. Print element at index '0'
        System.out.println(studentNames.get(0)); // Print first element in list

        // 3. Set element at index '2' to "Guy"
        String prevValue = studentNames.set(2, "Guy"); // studentNames[2] = "Guy";
        System.out.println(studentNames.get(2)); // Print second element in list

        // 4. Remove element at index 1, and shrink the array, move all elements one element to the left/top
        studentNames.remove(1); // Removes 'Shimon'
        System.out.println(studentNames.get(1));
    }
}
