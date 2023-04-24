package javaLerning.src.lesson_21.polymorphism;

import java.util.ArrayList;
import java.util.List;

public class Inhertience {
    public static void main(String[] args) {
        List<Integer> l =new ArrayList<Integer>( List.of(1,2,3));
        print(l);
        fillNumbers(l);
    }

    public static <T extends Number> void print(List<T> numbers){
        numbers.forEach(n -> System.out.println(n.intValue()));
    }

    public static void fillNumbers(List<? super Integer> l){
        for (int i = 0; i < 10; i++) {
            l.add(i);
        }

        System.out.println(l);
    }
}
