package javaLerning.src.class_project.class_project_part5.student;

public class Student extends StudentProspect {
    public String name;
    public int age;



    public Student(String name, int age) {
        this.name = name;
        this.age = age;

    }


    @Override
    public String toString() {
        String text = super.toString();
        return text + "Name :" + this.name + "\n" + "age :" + this.age + "\n";


    }

}