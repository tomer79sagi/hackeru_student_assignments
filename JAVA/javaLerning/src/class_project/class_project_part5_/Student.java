package javaLerning.src.class_project.class_project_part5_;

public class Student {
    String name;
    int age;


    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }


    @Override
    public String toString() {
        return "Name :" + this.name + "\n" + "age :" + this.age + "\n";
    }
}