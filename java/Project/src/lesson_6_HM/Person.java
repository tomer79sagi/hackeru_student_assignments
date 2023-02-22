package lesson_6_HM;

import java.util.Date;

public class Person {
    public static void main(String[] args) {
        Person eitan = new Person();
        eitan.printHello();
        eitan.firstName = "Eitan";
        eitan.printName();

    }

    String firstName;

    String lastName;

    String birthDate;

    public Person() {

    }

    public Person(String firstName, String lastName, String birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }


    void printHello() {
        System.out.println("Hello");
    }

     void printName() {
        System.out.printf("My first name is %s", this.firstName);

    }
}
