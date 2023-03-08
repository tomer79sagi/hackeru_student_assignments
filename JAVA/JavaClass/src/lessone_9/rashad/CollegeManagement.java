package lessone_9.rashad;

import java.util.Arrays;

public class CollegeManagement {
    static Student[] students = new Student[0];

    public CollegeManagement() {
        printWelcome();
    }

    public static void main(String[] args) {
        CollegeManagement cm = new CollegeManagement();
        cm.getNumOfStudents();
        cm.fillStudentsArr();
        cm.printAllStudents();
    }

    private void getNumOfStudents() {
        System.out.println("Please enter number of students in college:");
        int numOfStudents = IO.nextInt();
        students = Arrays.copyOf(students,numOfStudents);
    }
    private void printAllStudents() {
        for (Student student: students) {
            System.out.println(student);
        }
    }

    private void fillStudentsArr() {
        for (int i = 0; i < students.length; i++) {
            System.out.println("Please enter student name :");
            String studentName = IO.nextString();
            System.out.println("Please enter student age :");
            int studentAge = IO.nextInt();
            students[i] = new Student(studentName, studentAge);
        }
    }

    public void printWelcome(){
        System.out.println("Starting college management app..");
    }
}