package javaLerning.src.H_W_F_P.java2__29_1_23;

public class page36___ {
    public static void main(String[] args) {
        tenAsterisks();
        sumOfNumbers();
        randomNumbers();
    }

    private static void tenAsterisks(){
        System.out.println("print ten asterisks");

        for (int i = 0; i < 10; i++) {
            System.out.print("* ");
        }
        System.out.println("\n");
    }

    private static void sumOfNumbers(){
        System.out.println("sum of numbers");

        int num = 0;

        for (int i = 1; i <= 20; i++) {
            num+=i;
            System.out.print(i + "+");
        }
        System.out.println("\n=\n"+num);
        System.out.println();
    }

    private static void randomNumbers(){
        for (int i = 0; i < 10; i++) {
            int num2 = (int) (Math.random() * 100) +1;
            System.out.println(num2);
        }
    }
}
