package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;

import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.IO;

public class Compare {
    public static void main(String[] args) {
        System.out.println("You entered: " + IO.nextString());

        // A. Create separate instances for "Tomer"
//        String str = new String("Tomer"); // New instance (memory address)
//        String str1 = new String("Tomer"); // New instance (memory address)

        // B. Assign 'str1' to 'str' (memory address assignment)
        // Assignment 'by reference' (pointer/memory address)
//        String str = new String("Tomer"); // New instance (memory address)
//        String str1 = str; // Assign the same memory address of 'str' to a new variable called 'str1'

        // C. Strings without 'new' (without forcing a new instance), Java uses String pooling optimization
        String str = "Tomer";
        String str1 = "Tomer"; // If it's the same content + not using 'new' ==> optimization (points to the same)

        // D. Primitive variables are ALWAYS compared by value / NOT by memory address
        // the method '.equals()' doesn't exist because we don't have any objects!
//        int str = 4;
//        int str1 = 5;

        // 1. Check memory pointer
        if (str1 == str) {
            System.out.println("Same");
        } else {
            System.out.println("Not the same");
        }

        // 2. Compare values of objects
        if (str1.equals(str)) {
            System.out.println("Same");
        } else {
            System.out.println("Not the same");
        }
    }
}
