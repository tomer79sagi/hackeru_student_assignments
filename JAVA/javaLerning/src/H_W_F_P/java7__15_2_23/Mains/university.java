package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;

import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.student;

import java.util.Scanner;

public class university {
    public static void main(String[] args) {
        System.out.println("input name");

        Scanner scan = new Scanner(System.in);
        String name = scan.next();
        String last = scan.next();

        student student1 = new student(name);

        student1.printName();
        System.out.println();
        System.out.println(student1);
    }
}
