package Lesson3;

public class Array_simple {

    public static void main(String[] args) {
        String [] studentNames = {"Eitan", "Aviad", "tal"};
        int [] studentGrades = {65, 100, 65};

        for(int i = 0; i < studentNames.length; i++) {
            System.out.println(studentNames[i]);
        }

        //another type of loop, sort of like for-each in JS
        for (int grade : studentGrades) {
            System.out.println(grade);
        }

    }
}
