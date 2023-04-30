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

        System.out.println("course 1");
        course.print();
        System.out.println(course.getSize());
        System.out.println();

        course.prepend("Inheritance");
        System.out.println("course with one more liable at the first please");
        course.print();
        System.out.println(course.getSize());
        System.out.println();

        course.add(5,"threads");
        course.add(3,"Inner Class");
        course.add(1,"Class");
        System.out.println("course whit 3 more values at 5,3,1");
        course.print();
        System.out.println(course.getSize());
        System.out.println();

        course.removeByValue("Set");
        System.out.println("course without 'set'");
        course.print();
        System.out.println(course.getSize());
        System.out.println();

        System.out.println("index of the value");
        System.out.println(course.indexOf("list"));


    }
}
