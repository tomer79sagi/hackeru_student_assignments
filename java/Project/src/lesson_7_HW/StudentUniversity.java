package lesson_7_HW;

import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.util.Scanner;

public class StudentUniversity {
    public static void main(String[] args) {
        System.out.println("Enter your name");
        Scanner input = new Scanner(System.in);


        String firstName = input.nextLine();
        String lastName = input.nextLine();
        String birthDate = input.nextLine();

        Student studentName = new Student(firstName , lastName , birthDate);


        System.out.println(studentName);



    }



}
