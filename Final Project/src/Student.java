import java.util.ArrayList;

public class Student {
    private final String name;
    private final int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    @Override
    public String toString() {
        String frame = "+-------------------------------------------------+\n";
        String nameLine = "| Name: " + name + "\n";
        String ageLine = "| Age: " + age + "\n";
        String bottomLine = "+-------------------------------------------------+\n";

        return frame + nameLine + ageLine + bottomLine;
    }
}
