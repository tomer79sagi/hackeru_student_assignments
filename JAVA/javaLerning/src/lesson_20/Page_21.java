package javaLerning.src.lesson_20;

import java.util.HashSet;
import java.util.Set;

public class Page_21 {
    public static void main(String[] args) {
        HashSet<Integer> s = new HashSet<>();
        System.out.println(s.add(1));
        System.out.println(s.add(1));

        System.out.println(s);

        for (Integer integer:s){
            System.out.println(integer);
        }

        Set<Integer> numbers1 = Set.of(1,2,3);
        Set<Integer> numbers2 = new HashSet<>();

    }
}
