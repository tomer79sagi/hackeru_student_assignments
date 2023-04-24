package javaLerning.src.lesson_10;

import java.util.ArrayList;
import java.util.List;

public class Steam {
    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(5);
        numbers.add(9);
        numbers.add(8);
        numbers.add(1);

        //Create a new list of all numbers higher than 5
        List<Integer> numbersHigherThanFive = numbers.stream().filter(n -> n > 5).toList();
        System.out.println(numbersHigherThanFive);
//        List<Integer> numbersHigherThanFive = numbers.stream().filter(n -> n > 5).collect(Collectors.toList());


    }
}
