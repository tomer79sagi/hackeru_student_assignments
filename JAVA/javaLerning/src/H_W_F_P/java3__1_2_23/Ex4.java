package javaLerning.src.H_W_F_P.java3__1_2_23;

public class Ex4 {
    public static void main(String[] args) {

        Ex4 ex1 = new Ex4();
        ex1.zeroHundredRandom();
        ex1.fiveTenRandom();

    }

    private void zeroHundredRandom(){
        for (int i=0 ; i<5 ; i++) {

            float num = (float) Math.random() * 101;
            //option1
            System.out.println(num > 100 ? 100f : num);

            //option2
            System.out.println(Math.min(100, num));

        }
        System.out.println();
    }

    private void fiveTenRandom(){

        for (int i=0;i<5;i++) {
            int num = (int) (Math.random() * 6 + 5);
            System.out.println(num);
        }

    }
}
