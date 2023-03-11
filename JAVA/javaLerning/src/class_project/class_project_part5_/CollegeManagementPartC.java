package javaLerning.src.class_project.class_project_part5_;

//1. add menu with 3 options to the program.  show/add/remove
//2. show the number of current registered student in the array.
//3. press on 1 will show all student on the list.
//4. press on 2 will give an option to add one student.(name and age)
//5. press on 3 will show all student listed with an index num next to each one, to remove a student from the list press the index num of specific student.
//6. if any option from the menu is pressed pop up menu again.


import java.util.ArrayList;
import java.util.List;


import javaLerning.src.IO.IO;

import static javaLerning.src.myColors.MyColors.*;

public class CollegeManagementPartC {

    static ArrayList<Student> students = new ArrayList<Student>();
    public static void main(String[] args) {

        System.out.println(PURPLE+"Starting College Management App"+"\n");

        menu();
    }

    public static void menu() {
        int optionNum;
        do {
            System.out.println(YELLOW+ "There is " +"(" +GREEN+ students.size() +YELLOW+ ")" + " students registered");
            System.out.println(RED+ "Select an option");
            System.out.println(BLUE + "(1). Show student list");
            System.out.println(BLUE + "(2). Add a new student");
            System.out.println(BLUE + "(3). Remove a student");
            System.out.println(GREEN + "(4). Second menu");
            System.out.println(RED + "(5). Exit program");
            System.out.print(RESET_COLOR);


            optionNum = IO.nextInt();

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
                    secondMenu();
                    break;
                case 5:
                    System.exit(0);
                    System.out.println(RED + "You ara out of the system");

                    break;
            }

        } while(true);
    }

    public static void getStudentList(){
        System.out.println(GREEN + "Student list: ");

        if (students.isEmpty()){
            System.out.println("No student registered\n");
        }
        for (Student student : students) {
            System.out.println(YELLOW + student);
        }
    }

    public static void addStudent() {

        System.out.println("Please enter student type: ");
        String type = IO.nextString();
        System.out.println("Please enter your name: ");
        String name = IO.nextString();
        System.out.println("Please enter your age: ");
        int age = IO.nextInt();
        while (age >=120 || age < 1){
            System.out.println("please enter a valid age");
            age = IO.nextInt();
        }

        Student addStudent;

        switch(type) {
            case "math_student":
                System.out.println("Please enter math student subject: ");
                String subject = IO.nextString();
                addStudent = new MathStudent(name, age, subject);
                break;
            default:
                addStudent = new Student(name,age);
                break;
        }
        students.add(addStudent);
        System.out.println();
    }

    public static void removeStudent(){

        if (students.isEmpty()){
            System.out.println("No student registered\n");
        }
        else {

            System.out.println(CYAN + "Please enter the index of the student to remove:\n");

            int count = 0;
            for (Student student : students) {
                count++;
                System.out.println(YELLOW + student + "Index is: " + count + "\n");
            }

            int index = IO.nextInt();
            Student removedStudent = students.remove(index - 1);
            System.out.println(RED + "Student removed: " + YELLOW + removedStudent);

        }

    }

    public static void secondMenu() {

        do {
            System.out.println(YELLOW + "There is " + "(" + students.size() + ")" + " students registered");
            System.out.println(RED + "Select an option");
            System.out.println(BLUE + "(1). Show all students younger than 18");
            System.out.println(BLUE + "(2). Show all students older than 35");
            System.out.println(BLUE + "(3). Search for a student by free text");
            System.out.println(GREEN + "(4). Go back to main menu");
            System.out.println(RED + "(5). Exit program");
            System.out.print(RESET_COLOR);

            int optionsSecond = IO.nextInt();

            switch (optionsSecond) {

                case 1:
                    if (youngStudents() == 0) {
                        System.out.println("There are no younger students then 18 years old");
                    }
                    System.out.println(YELLOW + "There are " + "(" + youngStudents() + ")" + " Students younger then 18" + "\n");
                    break;

                case 2:
                    if (olderStudents() == 0) {
                        System.out.println("There are no students older then 35" + "\n");
                    }
                    System.out.println(YELLOW + "There are " + "(" + olderStudents() + ")" + " Students older then 35" + "\n");
                    olderStudents();
                    break;

                case 3:
                    searchByString();
                    break;

                case 4:
                    menu();

                case 5:
                    System.exit(0);
                    System.out.println(RED + "You ara out of the system");
            }
        }while (true);
    }

    public static int youngStudents(){
        List<Student> youngStudents = students
                .stream()
                .filter(s -> s.age <= 18)
                .toList();

        return youngStudents.size();

    }

    public static int olderStudents(){
        List <Student> olderStudents = students
                .stream()
                .filter(s -> s.age >= 35)
                .toList();

        return olderStudents.size();
    }



    public static void searchByString(){
        String searchInput = IO.nextString();

        List<Student> searchStudent = students.stream().filter(str -> str.name.toLowerCase().contains(searchInput.toLowerCase())).toList();

        for (Student searchName:searchStudent){
            System.out.println(YELLOW + searchName + "\n");
        }
        if (searchStudent.isEmpty()){
            System.out.println("No matches found");
        }


    }

}
