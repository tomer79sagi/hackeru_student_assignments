package lesson_4_HM;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class HM {
    public static void main(String[] args) {
        // Create new object of class type 'Exercise4_Numbers1' and assign it to 'exercise' variable
        HM HM = new HM();
//        HM.oneToFiveTimes();
//        HM.EvenNumbers();
//        HM.moduloFiveThree();
//        HM.TenStars();
//        HM.sumOfTwenty();
//        HM.randomTwoNum();
//        HM.RandomThreeNum();
//        HM.RandomOneNum();
//        HM.arrayEvenIndex();
        HM.arrayOfTen();
//        HM.arrayOfFifteen();
//        HM.fibonacciArray();
//        HM.fibonacciArrayOfFifteen();
//        HM.arrayOfTenA();
//        HM.arrays();
    }

    private void oneToFiveTimes() {
        int sum = 1;
        for (int i = 1; i <= 5; i++) {
            sum = sum * i;
        }
        System.out.println(sum);
    }


    private void EvenNumbers() {
        for (int i = 0; i <= 100; i++) { //print even numbers between 1-100
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }

    private void moduloFiveThree() {
        for (int i = 0; i <= 100; i++) { //print all numbers between 1-100 that devide in 3 and 5 with no...
            if (i % 3 == 0) {
                if (i % 5 == 0) {
                    System.out.println(i);
                }
            }
        }
    }

    private void TenStars() {
        for (int i = 0; i < 10; i++) { //print 10 *
            System.out.println("*");
        }
    }

    private void sumOfTwenty() {
        int sum = 0;
        for (int i = 1; i <= 20; i++) {
            sum = sum + i;
        }
        System.out.println(sum);
    }

    private void randomTwoNum() {
        int num = (int) (Math.floor(Math.random() * (99 - 10)) + 10);
        System.out.println("The Number Is: " + num);
        while (num != 0) {
            System.out.println(num % 10);
            num = num / 10;
        }
    }

    private void RandomThreeNum() {
        int num = (int) (Math.floor(Math.random() * (999 - 100)) + 100);
        System.out.println("The Number Is: " + num);
        while (num != 0) {
            System.out.println(num % 10);
            num = num / 10;
        }
    }

    private void RandomOneNum() {
        int num = (int) (Math.floor(Math.random() * (9 - 1)) + 1);
        System.out.println("The Number Is: " + num);
        while (num != 0) {
            System.out.println(num % 10);
            num = num / 10;
        }
    }


    private void arrayEvenIndex() {
        String[] studentNames = {"Eitan", "Tal", "Aviad", "Yarin"};
        int[] studentGrades = {78, 99, 34, 88};

        // 1. Classic form
        for (int i = 0; i < studentNames.length; i++) {
            if (i % 2 == 0) {
                studentNames[i] += " SMITH";

            }
            System.out.printf("Name: %s, Grade: %d \n", studentNames[i], studentGrades[i]);
        }

        // 2. forEach
        // JS: studentNames.forEach(name => { alert() });
        for (String name : studentNames) {
            System.out.println(name);
        }
        System.out.println(Arrays.toString(studentNames));

    }

      private void arrayOfTen() {
        int[] intArray = new int[11];
        for (int i = 1; i <= 10; i++) {
            intArray[i] = i;
            System.out.print(intArray[i]);
        }
          System.out.println(Arrays.toString(intArray));
    }




    private void arrayOfFifteen() {
        Random rd = new Random();
        float[] intArray = new float[15];
        for (int i = 1; i <= 10; i++) {
            intArray[i] = rd.nextInt();

        }
        System.out.println(Arrays.toString(intArray));
    }

    private void fibonacciArray() {
        int a = 0, b = 1, c;
        System.out.print(b);
        for (int i = 2; b <= 34; i++) {
            c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
    }

    private void fibonacciArrayOfFifteen() {

        int[] f = new int[15];
        f[0] = 1;
        f[1] = 1;

        for (int i = 2; i < 15; i++) {
            f[i] = f[i - 1] + f[i - 2];
            System.out.print(f[i] + " ");
        }
    }

    private void arrayOfTenA() {

        byte[] arr = new byte[10];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = (byte) (Math.random() * 10 + 1);
        }

        System.out.println(Arrays.toString(arr));

        boolean isFoundPair = false;

        for (int i = 0; i < arr.length - 1 && !isFoundPair; i++) {
            for (int j = i + 1; j < arr.length && !isFoundPair; j++) {
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










