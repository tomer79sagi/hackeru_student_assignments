package javaLerning.src.lesson_17;

import java.util.function.IntPredicate;

public class ClassWork10 {
    public static void main(String[] args) {
        IntPredicate isAgeEven = i -> i % 2 == 0;
        int[] arrNum = new int[5];

        for (int i = 0; i < 5; i++) {
            arrNum[i] = (int)Math.floor(Math.random() * 100 + 1);
            System.out.println(arrNum[i] + "\t" + isAgeEven.test(arrNum[i]));
        }
    }
}
