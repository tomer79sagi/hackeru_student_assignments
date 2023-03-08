import java.util.Scanner;

public class ex1 {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter your weight: ");
        float weight = input.nextFloat();

        System.out.print("Enter your height: ");
        float height = input.nextFloat();
        System.out.println();

        System.out.printf("your BMI is %f", weight/(height*height));
    }
}