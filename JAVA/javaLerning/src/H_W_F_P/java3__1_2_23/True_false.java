package javaLerning.src.H_W_F_P.java3__1_2_23;

public class True_false {
    public static void main(String[] args) {
        continueExample();
    }
    static void continueExample() {
        for (int j = 0; j <300 ; j++) {
            if (j % 2 == 0) {
                continue;
            }

            System.out.printf("%d \n", j);
        }
    }
}
