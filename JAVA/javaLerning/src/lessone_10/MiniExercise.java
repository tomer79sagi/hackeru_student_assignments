package javaLerning.src.lessone_10;

import java.util.ArrayList;

public class MiniExercise {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();

        for (int i = 0; i < 8; i++) {
            numbers.add((int) (Math.random()*100));
        }

        System.out.println(numbers);
        int evenNum = (int) numbers.stream().filter(n-> n%2==0).count();
        System.out.println(evenNum);
    }
}
