package javaLerning.src.lesson_17.consumer;

import java.util.ArrayList;
import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) {
        consumerTest();

    }

    private static void consumerTest() {
        ArrayList<String> name = new ArrayList<>();

        Consumer<String> consumerPrinter = (p) -> System.out.println(p);
        name.forEach(consumerPrinter);

        name.forEach(p -> System.out.println(p));
    }

//    private static void consumerTest(ArrayList<Person> family) {
//        Consumer<Person> consumerPrinter = (p) -> System.out.println(p);
//        Predicate<Person> cFilter1 = p -> p.getSiblingOrder() > 1;
//
//        family.forEach(consumerPrinter);
//        family.forEach(p -> System.out.println(p));
//
//        family.stream().filter(cFilter1).forEach(consumerPrinter);
//        family.stream().filter(p -> p.getSiblingOrder() > 1).forEach(consumerPrinter);
//    }
}
