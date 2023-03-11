package javaLerning.src.H_W_F_P.java3__5_2_23.HM;

import java.util.Arrays;

public class Page19 {
    public static void main(String[] args) {

        byte[] arr = new byte[10];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = (byte) (Math.random() * 10 + 1);
        }

        System.out.println(Arrays.toString(arr));

        boolean isFoundPair = false;

        for (int i = 0; i < arr.length - 1 && !isFoundPair; i++) {
            for (int j = i + 1; j < arr.length && !isFoundPair; j++) {
                System.out.println(arr[i] +" | " + arr[j]);
                if (arr[i] + arr [j] == 9){
                    System.out.printf("pair: %d (%d) | %d (%d)", arr[i], i, arr[j], j);
                    isFoundPair = true;
                }
            }
        }
        if (!isFoundPair){
            System.out.println("Didn't find a pair");
        }
    }

}
