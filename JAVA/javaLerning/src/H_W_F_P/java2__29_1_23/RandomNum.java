package javaLerning.src.H_W_F_P.java2__29_1_23;

public class RandomNum {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            double num = (double)(Math.random()*102);
            int num2 = (int) (Math.random() * 6 + 5);

            System.out.println(num);
            System.out.println(num2);

            System.out.println();
        }

    }
}
