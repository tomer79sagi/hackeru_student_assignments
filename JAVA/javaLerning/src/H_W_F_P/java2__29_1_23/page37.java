package javaLerning.src.H_W_F_P.java2__29_1_23;

import java.util.Arrays;

public class page37 {
    public static void main(String[] args) {
        tenFibonacci();
        fifteenFibonacci();
    }
    
    private static void tenFibonacci(){
        System.out.println("fibonacci");
        int t1 = 1, t2 = 1;

        for (int i = 1; i <= 10; ++i) {
            System.out.print(t1 + " ");
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        System.out.println("\n");
    }

    private static void fifteenFibonacci(){
        System.out.println("fifteen fibonacci");

        int[] numbers = new int[15];
        int t1 = 1, t2 = 1;

        for (int i = 0; i < numbers.length; i++) {

            numbers[i] = t1;
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
        System.out.println(Arrays.toString(numbers));

        System.out.println();
    }
}
