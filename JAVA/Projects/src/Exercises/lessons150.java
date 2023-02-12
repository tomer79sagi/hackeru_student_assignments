package Exercises;

import java.util.Scanner;

public class lessons150 {
    public static void main(String[] args) {
        System.out.println("Hello world!");

       System.out.println("Hello\nAlexandra Abramov!"); //1 Write a Java program to print 'Hello' on
        // screen and then print your name on a separate line

       System.out.println(24+26); //2  Write a Java program to print the sum of two numbers


        System.out.println(50/3); //3. Write a Java program to divide two numbers and print on the screen

        //4. Write a Java program to print the result of the following operations.
        //    a. -5 + 8 * 6
        //    b. (55+9) % 9
        //    c. 20 + -3*5 / 8
        //    d. 5 + 15 / 3 * 2 - 8 % 3
        System.out.println("--Ex 4");
        System.out.println(-5 + 8 * 6);
        System.out.println((55+9) % 9);
        System.out.println(20 + -3*5 / 8);
        System.out.println(5 + 15 / 3 * 2 - 8 % 3);

        //Ex 5
        // Write a Java program that takes two numbers as input and display the product of two numbers
        //Expected Output :
        //25 x 5 = 125
        System.out.println("--Ex5");

        Scanner in = new Scanner(System.in);
        System.out.print("Input first number: ");
        int num1 = in.nextInt();

        System.out.print("Input second number: ");
        int num2 = in.nextInt();

        System.out.println(num1 + " x " + num2 + " = " + num1 * num2);

        //Ex6
        // 6. Write a Java program to print the sum (addition), multiply, subtract,
        // divide and remainder of two numbers. Go to the editor
        //Test Data:
        //Input first number: 125
        //Input second number: 24
        //Expected Output :
        //125 + 24 = 149
        //125 - 24 = 101
        //125 x 24 = 3000
        //125 / 24 = 5
        //125 mod 24 = 5
     System.out.println("--Ex6");
        System.out.print("Input first number: ");
        int num3 = in.nextInt();

        System.out.print("Input second number: ");
        int num4 = in.nextInt();


        System.out.println(num3 + " + " + num4 + " = " +
                (num3 + num4));

        System.out.println(num3 + " - " + num4 + " = " +
                (num3 - num4));

        System.out.println(num3 + " x " + num4 + " = " +
                (num3 * num4));

        System.out.println(num3 + " / " + num4 + " = " +
                (num3 / num4));

        System.out.println(num3 + " mod " + num4 + " = " +
                (num3 % num4));

       // 7. Write a Java program that takes a number as input and prints its multiplication table
       // upto 10. Go to the editor
       //Test Data:
       //Input a number: 8
       //Expected Output :
       //8 x 1 = 8
       //8 x 2 = 16
       //8 x 3 = 24
       //...
       //8 x 10 = 80

     System.out.println("--Ex7");
     System.out.print("Input a number: ");
     int num5 = in.nextInt();

     for (int i=0; i< 10; i++){
      System.out.println(num1 + " x " + (i+1) + " = " +
              (num5 * (i+1)));
     }

     // 8. Write a Java program to display the following pattern. Go to the editor
     //Sample Pattern :
     //
     //   J    a   v     v  a
     //   J   a a   v   v  a a
     //J  J  aaaaa   V V  aaaaa
     // JJ  a     a   V  a     a
     //

     System.out.println("--Ex8");
     System.out.println("   J    a   v     v  a ");
     System.out.println("   J   a a   v   v  a a");
     System.out.println("J  J  aaaaa   V V  aaaaa");
     System.out.println(" JJ  a     a   V  a     a");

     //9. Write a Java program to compute the specified expressions and print the output. Go to the editor
     //Test Data:
     //((25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5))
     //Expected Output
     //2.138888888888889
     System.out.println("--Ex9");
     System.out.println((25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5));

     // 10. Write a Java program to compute a specified formula. Go to the editor
     //Specified Formula :
     //4.0 * (1 - (1.0/3) + (1.0/5) - (1.0/7) + (1.0/9) - (1.0/11))
     //Expected Output
     //2.9760461760461765
     System.out.println("--Ex10");
     double result = 4.0 * (1 - (1.0/3) + (1.0/5) - (1.0/7) + (1.0/9) - (1.0/11));
     System.out.println(result);

    }


}



