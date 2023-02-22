package lesson_7_HW;

import javax.swing.plaf.synth.SynthRadioButtonMenuItemUI;
import java.util.Date;

public class Student {
    String firstName;

    String lastName;

    String birthDate;



    public Student(String firstName, String lastName, String birthDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }





    public String toString(){
        return "your first name is:" + " " + this.firstName  +  " " +
                "your last name is:" + " " + this.lastName +
                "your birth date is:" + " " + this.birthDate + " ";}



}
