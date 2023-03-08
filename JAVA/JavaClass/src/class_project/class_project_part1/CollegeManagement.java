package lessone_9.class_project_part1;
import java.util.Arrays;
import java.util.Scanner;

public class CollegeManagement {
    static Student[] students = new Student[0];

    public static void main(String[] args) {
        System.out.println("Starting College Management App");


        Scanner inputNumber = new Scanner(System.in);
        System.out.println("Hey there, please enter how many students are there :");
        int studentsNum = inputNumber.nextInt();
        add(studentsNum);


        for (int i = 0; i < students.length; i++) {
            System.out.println("Please enter your name :");
            String name = inputNumber.next();
            System.out.println("Please enter your age :");
            int age = inputNumber.nextInt();
            Student addStudent = new Student(name, age);
            students[i] = addStudent;
        }
        for (Student student : students) {
            System.out.println(student);
        }

    }

    public static void add(int value) {

        students = Arrays.copyOf(students, students.length + value);

    }
}