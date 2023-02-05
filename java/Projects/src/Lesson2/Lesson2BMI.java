import java.util.Scanner;

public class Lesson2BMI {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your weight in kg: ");
        int weight = scan.nextInt();
        System.out.print("Enter your height in meters: ");
        int height = scan.nextInt();


        System.out.println("Your BMI is:" + (weight/(Math.pow(height,2))));

    }
}
