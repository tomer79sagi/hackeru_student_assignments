package lessone_9.class_project_part4;

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