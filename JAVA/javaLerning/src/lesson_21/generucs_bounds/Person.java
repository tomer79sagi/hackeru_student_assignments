package javaLerning.src.lesson_21.generucs_bounds;

public class Person extends Number
        implements Comparable<Person> {
    @Override
    public int intValue() {return 0;}

    @Override
    public long longValue() {return 0;}

    @Override
    public float floatValue() {return 0;}

    @Override
    public double doubleValue() {return 0;}

    @Override
    public int compareTo(Person person) {return 0;}
}
