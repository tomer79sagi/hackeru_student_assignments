package lessone_9.class_project_part4;

//1. add menu with 3 options to the program.  show/add/remove
//2. show the number of current registered student in the array.
//3. press on 1 will show all student on the list.
//4. press on 2 will give an option to add one student.(name and age)
//5. press on 3 will show all student listed with an index num next to each one, to remove a student from the list press the index num of specific student.
//6. if any option from the menu is pressed pop up menu again.

import java.util.ArrayList;

import static lessone_9.class_project_part4.colors.*;

public class CollegeManagementPartC {

    static ArrayList<Student> students = new ArrayList<Student>();
    public static void main(String[] args) {

        System.out.println(PURPLE+"Starting College Management App"+"\n");
        menu();
    }

    public static void menu() {

        System.out.println(YELLOW+ "There is " +"(" +GREEN+ students.size() +YELLOW+ ")" + " students registered");
        System.out.println(RED+ "Select an option");
        System.out.println(BLUE+ "(1). Show student list");
        System.out.println(BLUE+ "(2). Add a new student");
        System.out.println(BLUE+ "(3). Remove a student");
        System.out.println(BLUE+ "(4). Exit program");
        System.out.print(RESET_COLOR);

        int optionNum = IO.nextInt();

        switch (optionNum) {
            case 1:
                getStudentList();
                break;
            case 2:
                addStudent();
                break;
            case 3:
                removeStudent();
                break;
            case 4:
                System.out.println(RED+"You ara out of the system");
                exitProgram();
                break;
        }
    }

    public static void getStudentList(){
        int count = 0;
        if (students.isEmpty()){
            System.out.println("No student registered");
        }
        for (Student student : students) {
            count++;
            System.out.println(YELLOW + student + "Index is: " + count+ "\n");
        }
        menu();
    }

    public static void addStudent() {
        System.out.println("Please enter your name: ");
        String name = IO.nextString();
        System.out.println("Please enter your age: ");
        int age = IO.nextInt();
        while (age >=120 || age < 1){
            System.out.println("please enter a valid age");
            age = IO.nextInt();
        }
        Student addStudent = new Student(name, age);
        students.add(addStudent);
        menu();
    }

    public static void removeStudent(){

        if (students.isEmpty()){
            System.out.println("No student registered");
        }
        else {

            System.out.println("Please enter the index of the student to remove:");

            int count = 0;
            for (Student student : students) {
                count++;
                System.out.println(YELLOW + student + "Index is: " + count + "\n");
            }

            int index = IO.nextInt();
            Student removedStudent = students.remove(index - 1);
            System.out.println(RED + "Student removed: " + YELLOW + removedStudent);

            menu();
        }
    }

    public static void exitProgram(){
        System.exit(0);
    }

}
