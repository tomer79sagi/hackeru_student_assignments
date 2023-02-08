package Lesson1;

import java.util.Scanner;

public class VariablesTypes {
    public static void main(String[] args) {
        ex1();
        ex2();
        ex3();
        ex4();
        ex5();
        ex6();
        ex7();
        ex8();
        ex9();
        ex10();
        ex11();
        ex12();
        ex13();
        ex14();
        ex15();
    }
    static void ex1(){
        System.out.println("-- ex1 --");
        Scanner deg = new Scanner(System.in);
        System.out.println("Enter degrees in fahrenheit");
        float fDegree = deg.nextFloat();
        System.out.println("degrees in celsius: " + (5*(fDegree - 32)/9));
    }
    static void ex2(){
        System.out.println("-- ex2 --");
        Scanner myInch = new Scanner(System.in);
        System.out.println("Enter length in inches");
        float inch = myInch.nextFloat();
        System.out.println("Length in meters: " + (inch*0.0254));
    }
    static void ex3(){
        System.out.println("-- ex3 --");
        Scanner myNum = new Scanner(System.in);
        System.out.println("Enter a number between 0 to 1000");
        int n = myNum.nextShort();
        while(n < 0 || n > 1000){
            System.out.println("Wrong input, please try again");
            n = myNum.nextShort();
        }
        int sum = 0; ///what is the problem with short? something went wrong when i tried to divide in 10
        while(n%10 != 0){
            sum += n%10;
            n = n/10;
        }
        System.out.println("Sum of the letters: " + sum);
    }
    static void ex4(){
        System.out.println("-- ex4 --");
        Scanner myTime = new Scanner(System.in);
        System.out.println("Enter time in minutes");
        int min = myTime.nextInt();
        int years = min/(365*24*60);
        int days = (min/60/24)%365;
        System.out.printf("%d years and %d days", years, days);
        System.out.println();
    }
    static void ex5(){
        System.out.println("-- ex5 --");
    }
    static void ex6(){
        System.out.println("-- ex6 --");
        Scanner myBMI = new Scanner(System.in);
        System.out.println("Enter your height then enter your weight");
        float height = myBMI.nextFloat();
        float weight = myBMI.nextFloat();
        double bmi = weight/Math.pow(height, 2);
        System.out.printf("Your BMI: %f" , bmi);
        System.out.println();
    }
    static void ex7(){
        System.out.println("-- ex7 --");
    }
    static void ex8(){
        System.out.println("-- ex8 --");
    }
    static void ex9(){
        System.out.println("-- ex9 --");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter first number");
        int n1 = input.nextInt();
        System.out.println("Enter second number");
        int n2 = input.nextInt();
        int sum = n1+n2;
        int difference = n1 - n2;
        int product = n1*n2;
        int distance = Math.abs(n1-n2);
        float average = (float) (n1+n2)/2;
        int max = Math.max(n1, n2);
        int min = Math.min(n1, n2);

        System.out.printf("Sum: %d \nDifference: %d \nProduct: %d \nDistance: %d \nAverage: %f \nMax: %d \nMin: %d",
                sum, difference, product, distance, average, max, min);
        System.out.println();
    }
    static void ex10(){
        System.out.println("-- ex10 --");
        Scanner myNUM = new Scanner(System.in);
        System.out.println("Enter an integer");
        int number = myNUM.nextInt();
        char [] chars = String.valueOf(number).toCharArray();
        for(int i=0; i<chars.length; i++){
            System.out.print(chars[i]+" ");
        }
        System.out.println();
    }
    static void ex11(){
        System.out.println("-- ex11 --");
    }
    static void ex12(){
        System.out.println("-- ex12 --");
    }
    static void ex13(){
        System.out.println("-- ex13 --");
    }
    static void ex14(){
        System.out.println("-- ex14 --");
    }
    static void ex15(){
        System.out.println("-- ex15 --");
    }
}

