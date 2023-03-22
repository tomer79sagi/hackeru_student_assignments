package javaLerning.src.H_W_F_P.java2__29_1_23;

import java.util.Scanner;

public class LargerNumber {
    public static void main(String[] args) {


        Scanner input = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int num1 = input.nextInt();

        System.out.print("Enter second number: ");
        int num2 = input.nextInt();

        if (num1 > num2){
            System.out.println(num1);
        }else {
            System.out.println(num2);
        }

        if (num1 > num2){
            System.out.println(num1 + num2);
        }else {
            System.out.println(num2 - num1);
        }
    }


}
