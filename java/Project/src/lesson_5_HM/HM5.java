package lesson_5_HM;

import org.w3c.dom.ls.LSOutput;

import javax.sound.midi.Soundbank;
import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.util.Arrays;
import java.util.Scanner;

public class HM5 {
    public static void main(String[] args) {
        HM5 HM5 = new HM5();
//        HM5.arrayOfArrays();
//        HM5.arrayOfArrays2();
//        HM5.arraysOfArrays3();
//        HM5.arrayInClass();
//        HM5.arrayOfArrays2_2();
//        HM5.arrayOfTwenty();
        HM5.identicalNumInArray();
    }

    private void arrayOfArrays() {


        int[][] arr = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
        System.out.println(Arrays.toString(arr[0]));


        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        System.out.println(sum);


        for (int i = 0; i < arr.length; i++) {
            System.out.println(Arrays.toString(arr[i]));
        }
        System.out.println();


        int[] newArray = new int[arr.length];
        int index = 0;
        for (int i = arr.length - 1; i >= 0; i--) {
            for (int j = arr.length - 1; j >= 0; j--) {

                newArray[index] = arr[i][j];
                index++;
            }
            System.out.println(Arrays.toString(newArray));
            index = 0;
        }
    }


    private void arrayOfArrays2() {

        int[] data = new int[10];
        int[] reverseArray = new int [data.length];

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter 10 details:");

        for (int i = 0; i < data.length; i++) {
            data[i] = sc.nextInt();
        }
        System.out.println(Arrays.toString(data));

        int count = 0;
        for (int i = data.length-1; i > -1; i--) {
            reverseArray[count] = data[i];
            count++;
        }
        System.out.println(Arrays.toString(reverseArray));





    }

    private void arraysOfArrays3() {

        int[][] table = new int[4][5];

//
        for (int i = 0; i < 5; i++) {
            table[0][i] = i + 1;
        }
        for (int i = 0; i < 5; i++) {
            System.out.print((table[0][i] + " "));
        }
        System.out.println();


        for (int i = 0; i < 5; i++) {
            table[1][i] = (i + 1) * 2;

        }
        for (int i = 0; i < 5; i++) {
            System.out.print(table[1][i] + " ");
        }
        System.out.println();

        int sum = 20;
        for (int i = 0; i < 5; i++) {
            table[2][i] += sum;
            sum = (int) Math.ceil(sum / 2.0);
            sum = (int) Math.round(sum / 2.0);
        }
        System.out.println(Arrays.toString(table[2]));

//
//            int sum =0;
//            for (int i = 0; i < table[2].length; i++) {
//                if(i<=1){
//                    table[2][i] = i+2;
//                }else{
//                    table[2][i] = sum;
//                }
//                sum += table[2][i];
//            }
//
//            System.out.println(Arrays.toString(table[2]));


        for (int i = 0; i < table.length; i++) {
            for (int j = 0; j < table[i].length; j++) {
                System.out.printf("%d, %d | ", i, j);
            }
            System.out.println();
        }
    }


    private void arrayOfArrays2_2(){

        int[] array = new int[5];
        int maxNum = 0;
        Scanner input = new Scanner(System.in);

        System.out.println("Enter 5 details:");

        for (int i = 0; i < array.length; i++) {
            array[i] = input.nextInt();
            if (array[i] > maxNum){
                maxNum =array[i];
            }
        }
        System.out.println(maxNum);
    }

    private void arrayOfTwenty(){

        String[] array = new String[20];

        Scanner input = new Scanner(System.in);

        System.out.println("Enter 20 details:");



        for (int i = 0; i < array.length; i++) {
            array[i] = input.nextLine();
        }
        System.out.println(Arrays.toString(array));

        System.out.println("Enter a detail");
        String x = input.nextLine();

        int count = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(x)){
                count++;
            }
        }
        if (count == 0){
            System.out.println("couldn't find a match");
        }
        else {
            System.out.println(count);
        }
    }
    private void identicalNumInArray(){

        int[] array = new int[10];
        Scanner input = new Scanner(System.in);

        System.out.println("Enter 10 details:");

        boolean isFlag = false;

        for (int i = 0; i < array.length; i++) {
            array[i] = input.nextInt();
        }
        System.out.println(Arrays.toString(array));

        for (int i = 0; i < array.length && !isFlag; i++) {
            for (int j = 1+i; j < array.length && !isFlag; j++)
                if (array[i] == array[j]) {

                    isFlag = true;
                    break;
                }

            }
        System.out.println(isFlag ? "We Found A Pair" : "We Didn't Find A Pair");
        }
    }















