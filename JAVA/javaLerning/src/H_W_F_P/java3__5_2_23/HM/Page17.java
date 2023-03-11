package javaLerning.src.H_W_F_P.java3__5_2_23.HM;

import java.util.Arrays;

public class Page17 {
    public static void main(String[] args) {

        int[] numbers = new int[11];

        for (int i=1 ; i<=10; i++){
            numbers[i] = i;
            System.out.print(i + " ");
        }
        System.out.println();
        System.out.print(Arrays.toString(numbers));
    }
}
