package Lesson4;

import java.io.PrintStream;
import java.util.Arrays;

public class Array_Simple {
    public static void main(String[] args) {
        String[] studentNames = {"Eitan", "Tal", "Aviad", "Yarin"};
        int[] studentGrades = {78, 99, 34, 88};

        // 1. Classic form
        for (int i=0 ; i<studentNames.length ; i++) {

            if (i%2==0){
                System.out.printf("Name: %s Smith, Grade: %d \n", studentNames[i], studentGrades[i]);
            }
            else{
            System.out.printf("Name: %s, Grade: %d \n", studentNames[i], studentGrades[i]);
            }
        }

        // 2. forEach
        // JS: studentNames.forEach(name => { alert() });
        for (String name : studentNames) {
            System.out.println(name);
        }
        System.out.println(studentNames); // Print object
        System.out.println(Arrays.toString(studentNames)); // Print readable array
    }
}