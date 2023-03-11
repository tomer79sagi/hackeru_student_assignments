package javaLerning.src.H_W_F_P.java5__8_2_23;

import java.util.Arrays;
import java.util.Scanner;

public class ArryOfArrys {
    public static void main(String[] args) {
        ArryOfArrys Arrays =new ArryOfArrys();

        Arrays.ARRAYS();
        Arrays.Page10();
        Arrays.Page11();

    }

    private void ARRAYS() {
        int[][] arr = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        for (int i=0 ;i< 1;i++){
            for (int j=0;j< arr[i].length;j++){
                System.out.printf("%d ",arr[i][j]);
            }
            System.out.println();
        }

        System.out.println();

        int sum =0;
        for (int i=0 ;i< arr.length;i++){
            for (int j=0;j< arr[i].length;j++){
                sum+=arr[i][j];
            }
        }
        System.out.println(sum);

        System.out.println();

//        for (int i=0 ;i< arr.length;i++){
//            for (int j=0;j< arr[i].length;j++){
//                System.out.printf("%d ",arr[i][j]);
//            }
//            System.out.println();
//        }

        for (int i = 0; i < arr.length; i++) {
            System.out.println(Arrays.toString(arr[i]));
        }

        System.out.println();

        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.println(Arrays.toString(arr[i]));
        }

        System.out.println();


//        int[] newArray = new int[arr.length];
//        int index = 0;
//        for (int i = arr.length - 1; i >= 0; i--){
//            for(int j = arr.length - 1; j >= 0; j--) {
//
//                newArray[index] = arr[i][j];
//                index++;
//            }
//            System.out.println(Arrays.toString(newArray));
//            index = 0;
//        }

    }


    private void Page10(){
        int[] data = new int[10];
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter 10 details:");

        for (int i = 0; i < 10; i++) {
            data[i] = sc.nextInt(); // Read and store the next data item
        }
        System.out.println(Arrays.toString(data));

        int[] dataRevars = new int[10];

        for (int i= 10; i > 0; i--){
            for (int j=0 ; j<10 ;j++){
                dataRevars[j] = data[i];
            }
        }
        System.out.println(Arrays.toString(dataRevars));

    }


    private void Page11(){

        int [][] table = new int[4][5];

        for (int i=0;i<5;i++){
            table[0][i] = i+1;
        }

        System.out.println(Arrays.toString(table[0]));

        int sum =0;
        for (int i = 0; i < table[2].length; i++) {
            if(i<=1){
                table[2][i] = i+2;
            }else{
                table[2][i] = sum;
            }
            sum += table[2][i];
        }

        System.out.println(Arrays.toString(table[2]));

        //  option 2

//        int sum = 20;
//        for (int i = 0; i < 5; i++) {
//            table[2][i] = sum;
//            sum = (int)Math.ceil(sum/2.0);
//        }
//        System.out.println(Arrays.toString(table[2]));
    }
}
