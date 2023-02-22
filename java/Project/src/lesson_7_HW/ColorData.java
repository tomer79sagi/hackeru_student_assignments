package lesson_7_HW;

import java.util.Scanner;

public class ColorData {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int red = input.nextInt();
        int green = input.nextInt();
        int blue = input.nextInt();

        Color redGreenBlue = new Color(red, green, blue);

        System.out.println(redGreenBlue);


    }
}
