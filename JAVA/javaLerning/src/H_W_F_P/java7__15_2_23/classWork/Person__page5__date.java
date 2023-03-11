package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

import java.util.Date;

public class Person__page5__date {
    String FirstName;
    String LastName;
    Date BirthDate;


    public Person__page5__date(String FirstName, String LastName, Date BirthDate){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.BirthDate = BirthDate;
    }

    public void printName() {
        System.out.print("hello ");
        System.out.println(this.FirstName);
    }

    public String toString(){
        return "your name is: " + FirstName + " " + LastName + "\n" +
                "and you born in: " + BirthDate;
    }
}
