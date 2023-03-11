package javaLerning.src.H_W_F_P.java6__12_2_23;

import java.util.Arrays;

public class ClassWork {
    public static void main(String[] args) {
        ClassWork Private =new ClassWork();


        int [][] table = new int[4][5];

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


        for (int i = 0; i < table.length; i++) {
            printTableRow(table,i);
        }
    }

    static private void printTableRow(int[][] table, int i){
        for (int j = 0; j < table[i].length; j++) {
            System.out.printf("%d, %d | ", i ,j);
        }
        System.out.println();
    }
}
