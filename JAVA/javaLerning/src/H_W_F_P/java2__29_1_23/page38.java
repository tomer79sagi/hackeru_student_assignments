package javaLerning.src.H_W_F_P.java2__29_1_23;

import java.util.Arrays;

public class page38 {
    public static void main(String[] args) {
        int[] numbers = new int[10];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = (int) (Math.random()*6+5);
        }
        System.out.println(Arrays.toString(numbers));


    }
}
