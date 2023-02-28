import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


public class CollegeManager {
    private final ArrayList<Student> students;
    String frame = "+----------------------------------+\n";
    String bottomLine = "+----------------------------------+\n";

    public CollegeManager() {

        this.students = new ArrayList<>();
    }

    /**
     * The method receive the college list of students and allows to remove a specific one from the array.
     *
     * @param collegeManager students list.
     */
    public static void removeStudent(CollegeManager collegeManager) {
        ArrayList<Student> students = collegeManager.getStudents();
        int numStudents = students.size();
        printStudents(collegeManager);

        if (numStudents == 0) {
            IO.println("There are no students in the college.");
            return;
        }

        IO.println("Enter the index of the student you want to remove (or 0 to cancel):");
        int index = IO.readInt();
        IO.consumeNewLine();

        if (index == 0) {
            IO.println("Operation cancelled.");
            return;
        }

        if (index < 1 || index > numStudents) {
            IO.println("Invalid index. Please enter a number between 1 and " + numStudents + ".");
            return;
        }

        Student removedStudent = students.remove(index - 1);
        IO.println("Removed student: " + removedStudent.toString());
    }

    /**
     * The method adds new students with specific amount.
     * If the array is not empty it will start from the last index.
     *
     * @param collegeManager students list.
     * @param oneStudent     Check if to add one student or more (1. One Student, 0. Multiply Students)
     */
    public static void addStudents(CollegeManager collegeManager, int oneStudent) {
        ArrayList<Student> students = collegeManager.getStudents();
        int j = students.size();

        if (oneStudent == 1) {
            IO.println("Enter the name of student #" + (j + 1) + ":");
            String name = IO.readString();
            IO.println("Enter the age of student #" + (j + 1) + ":");
            int age = IO.readInt();
            IO.consumeNewLine();
            Student student = new Student(name, age);
            collegeManager.addStudent(student);
            return;
        }

        IO.println("""
                How many students do you want to add?
                (Write '-1' For Default Students)
                """);
        int numStudents = IO.readInt();
        IO.consumeNewLine();

        if (numStudents == -1){
            defaultArr(collegeManager);
        }

        if (j != 0 && oneStudent == 0) {

            for (int i = j; i < numStudents + j; i++) {
                IO.println("Enter the name of student #" + (i + 1) + ":");
                String name = IO.readString();
                IO.println("Enter the age of student #" + (i + 1) + ":");
                int age = IO.readInt();
                IO.consumeNewLine();
                Student student = new Student(name, age);
                collegeManager.addStudent(student);

            }
        } else {
            for (int i = 0; i < numStudents; i++) {
                IO.println("Enter the name of student #" + (i + 1) + ":");
                String name = IO.readString();
                IO.println("Enter the age of student #" + (i + 1) + ":");
                int age = IO.readInt();
                IO.consumeNewLine();
                Student student = new Student(name, age);
                collegeManager.addStudent(student);
            }
        }

    }

    public static void youngStudents(CollegeManager collegeManager){
        ArrayList<Student> students = collegeManager.getStudents();
        long count =  students.stream().filter(age -> age.getAge() <= 18).count();
        System.out.print("+-------------------------------------------------+\n");
        System.out.printf("The amount of students under the age of 18 is: %s\n" , count);
        System.out.print("+-------------------------------------------------+\n");
    }

    public static void olderStudents(CollegeManager collegeManager){
        ArrayList<Student> students = collegeManager.getStudents();
        Object[] oldStudentArr = new List[]{students.stream().filter(student -> student.getAge() > 35).collect(Collectors.toList())};
        System.out.print("+-------------------------------------------------+\n");
        System.out.printf("The students That Are over the age of 35 is: \n\n %s" , oldStudentArr);
        System.out.print("+-------------------------------------------------+\n");
    }

    public static void searchStudent(CollegeManager collegeManager){
        ArrayList<Student> students = collegeManager.getStudents();
        System.out.print("""
                Please Enter A Name To Search
                (For Example 'test3' From The Default Array) \n \n
                """);
        String searchName = IO.readString();
        Optional<Student> foundStudent = students.stream().filter(student -> student.getName().contains(searchName))
                .findFirst();
        if (foundStudent.isPresent()) {
            Student student = foundStudent.get();
            System.out.printf("Found Student:\n%s\n" ,student.toString() );
        } else {
            System.out.println("Student not found");
        }
    }
    public void addStudent(Student student) {

        this.students.add(student);
    }

    public ArrayList<Student> getStudents() {

        return this.students;
    }
    /**
     * The method prints all the students and its index.
     *
     * @param collegeManager students list.
     */
    public static void printStudents(CollegeManager collegeManager) {
        ArrayList<Student> students = collegeManager.getStudents();
        int numStudents = students.size();
        System.out.println("List of students: ");
        for (int i = 0; i < numStudents; i++) {
            Student student = students.get(i);
            IO.println((i + 1) + ". \n" + student.toString());
        }
    }

    public static void subFunctions(CollegeManager collegeManager){
        ArrayList<Student> students = collegeManager.getStudents();

        System.out.println("\nPlease Select A number From The Sub Menu");
        System.out.println("(1): Show The Amount of Students Under The age of 18.");
        System.out.println("(2): Show All Students Over The age of 35.");
        System.out.println("(3): Search Student.");
        System.out.println("(4): Return To The Main Menu.");

        int userChoice = IO.readInt();
        IO.consumeNewLine();
        switch (userChoice) {
            case 1 -> {
                youngStudents(collegeManager);
                return;
            }
            case 2 -> {
                olderStudents(collegeManager);
                return;
            }
            case 3 ->
            {
                searchStudent(collegeManager);
                return;
            }
        }
    }

    /**
     * Driver Method that shows the menu and gives options.
     * For example show student list, add a new student, add a bunch of students or delete a specific student.
     */
    public static void main(String[] args) {
        CollegeManager collegeManager = new CollegeManager();
        addStudents(collegeManager, 0);
        ArrayList<Student> students = collegeManager.getStudents();

        while (true) {
            System.out.printf("""
                    Welcome To The Main Menu.
                    Please Select A number From The Menu.
                    There Are Currently: |#%d| Students In The College \s \n
                    """, students.size());
            System.out.println("(1): Show Student List.");
            System.out.println("(2): Add One New Student.");
            System.out.println("(3): Add More Than One Student.");
            System.out.println("(4): Delete Student.");
            System.out.println("(8): Access The Sub Menu For Search Functions.");
            System.out.println("(9): Use Default array for testing.");
            System.out.println("(0): Stop The Menu.");

            int userChoice = IO.readInt();
            IO.consumeNewLine();
            switch (userChoice) {
                case 1 ->
                        printStudents(collegeManager);
                case 2 ->
                        addStudents(collegeManager, 1);
                case 3 ->
                        addStudents(collegeManager, 0);
                case 4 ->
                        removeStudent(collegeManager);
                case 8->
                        subFunctions(collegeManager);
                case 9 ->
                        defaultArr(collegeManager);
                case 0 -> {
                        IO.println("Goodbye!");
                        return;
                }

            }
        }
    }

    private static void defaultArr(CollegeManager collegeManager){
        Student student1 = new Student("test1", 17);
        Student student2 = new Student("test2", 19);
        Student student3 = new Student("test3", 36);
        Student student4 = new Student("test4", 39);
        collegeManager.addStudent(student1);
        collegeManager.addStudent(student2);
        collegeManager.addStudent(student3);
        collegeManager.addStudent(student4);
    }
}

