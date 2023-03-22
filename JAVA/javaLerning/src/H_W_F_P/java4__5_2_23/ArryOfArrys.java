package javaLerning.src.H_W_F_P.java4__5_2_23;

import java.util.Arrays;

public class ArryOfArrys {
    public static void main(String[] args) {

//        int[] arr1 = {1,2,3,4,5};
//
//        //2 D Array (2 dimension)
//        //Example: array of student names in each lesson
//        // 1D[] = lessons
//        // 2D[] = Student names
//        String[][] attendance = {
//                {"a", "b", "c", "d"},
//                {"e", "f", "g", "h"},
//                {"i", "j", "k", "l"}
//        };
//        System.out.println(attendance [0][1]);
//        System.out.println(attendance[1][3]);

        int [][] arr = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
//        for (int i=0 ;i< arr.length;i++){
//            for (int j=0;j< arr[i].length;j++){
//                System.out.printf("%d ",arr[i][j]);
//            }
//            System.out.println();
//        }

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

        for (int i = arr.length - 1; i >= 0; i--){
            System.out.println(Arrays.toString(arr[i]));
        }
        System.out.println();
    }
}
