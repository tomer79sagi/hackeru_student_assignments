package javaLerning.src.lesson_22.page14.linkedList;

public class Main {

    public static void main(String[] args) {
        // LinkedList is a list of elements connected to one another in a chain (without indexes)
        LinkedList<String> course = new LinkedList<>();

        //Add courses that are dependent on one another
        course.add("Collections");
        course.add("List");
        course.add("Set");
        course.add("Hashtable");

        course.print();
        System.out.println(course.getSize());

        course.prepend("Inheritance");

        course.print();
        System.out.println(course.getSize());

        course.add(5,"threads");
        course.add(3,"Inner Class");
        course.add(1,"Class");

        course.print();
        System.out.println(course.getSize());

        course.removeByValue("Set");
        course.print();
        System.out.println(course.getSize());
        System.out.println();

        System.out.println(course.indexOf("Clas"));


    }
}
