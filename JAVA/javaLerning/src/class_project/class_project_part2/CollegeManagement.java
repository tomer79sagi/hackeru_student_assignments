package javaLerning.src.class_project.class_project_part2;

import java.util.ArrayList;
import java.util.Scanner;

public class CollegeManagement {
    static ArrayList<Student> students = new ArrayList<Student>();

    public static void main(String[] args) {
        System.out.println("Starting College Management App");

        Scanner inputNumber = new Scanner(System.in);
        System.out.println("Hey there, please enter how many students are there :");
        int studentsNum = inputNumber.nextInt();


        for (int i = 0; i < studentsNum; i++) {
            System.out.println("Please enter your name :");
            String name = inputNumber.next();
            System.out.println("Please enter your age :");
            int age = inputNumber.nextInt();
            Student addStudent = new Student(name, age);
            students.add(addStudent);
        }
        for (Student student : students) {
            System.out.println(student);
        }

    }

}