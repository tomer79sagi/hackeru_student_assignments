package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Arrays {
    public static void main(String[] args) {

        int [] numbers = new int[10];
        double [] numbers2 = new double[15];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i]= i+1;
        }
        for (int number : numbers){
            System.out.print(number + ",");
        }

        System.out.println("\n");

        for (int i = 0; i < 10 ; i++){
            numbers2[i] = Math.random()*10;
        }
        for (double number : numbers2){
            System.out.println(number);
        }
    }
}
