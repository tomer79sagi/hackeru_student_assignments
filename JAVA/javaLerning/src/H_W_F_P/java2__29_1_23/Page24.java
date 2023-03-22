package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Page24 {
    public static void main(String[] args) {
        System.out.println("5*10");
        int number = 10;
        int num = 9;

        for (int x = 1; x <= 5; x++) {
            for (int i = 1; i <= number; i++) {
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println("5x9");

        for (int i = 5; i>0 ;i--){
            for (int j = 1; j <= num; j++) {
                System.out.print("*");
            }
            num-=2;
            System.out.println();
        }
    }
}
