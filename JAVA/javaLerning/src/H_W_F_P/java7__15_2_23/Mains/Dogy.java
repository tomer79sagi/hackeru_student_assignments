package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;


import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.BigDog;
import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.Color;

import java.util.Scanner;

public class Dogy {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("input red");
        int red = input.nextInt();

        System.out.println("input green");
        int green = input.nextInt();

        System.out.println("input blue");
        int blue = input.nextInt();

        System.out.println("input dog name");
        String dogName = input.next();

        System.out.println("input dog breed");
        String dogBreed = input.next();

        Color color1 = new Color(red, green , blue);

        BigDog dog1 = new BigDog(dogName, dogBreed, color1);

        System.out.println(dog1);
    }
}
