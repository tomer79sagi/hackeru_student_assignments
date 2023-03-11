package javaLerning.src.class_project.class_project_part5;

//1. add menu with 3 options to the program.  show/add/remove
//2. show the number of current registered student in the array.
//3. press on 1 will show all student on the list.
//4. press on 2 will give an option to add one student.(name and age)
//5. press on 3 will show all student listed with an index num next to each one, to remove a student from the list press the index num of specific student.
//6. if any option from the menu is pressed pop up menu again.


import javaLerning.src.class_project.class_project_part5.student.Student;
import javaLerning.src.class_project.class_project_part5.student.StudentManagement;
import javaLerning.src.class_project.class_project_part5.student.StudentProspect;

import java.util.ArrayList;

import static javaLerning.src.myColors.MyColors.*;


public class CollegeManagementPartD {

    static ArrayList<Student> students = new ArrayList<Student>();

    public static void main(String[] args) {
        System.out.println(PURPLE+"Starting College Management App"+"\n");

        StudentManagement.menu();

        StudentProspect prospect1 = new StudentProspect();
        prospect1.addCommunications("we called student");
        prospect1.addCommunications("we called student");
        prospect1.addCommunications("we called student");

        System.out.println(prospect1);
    }

}

