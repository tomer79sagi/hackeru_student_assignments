package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Page22 {
    public static void main(String[] args) {

        System.out.println("duplicate numbers");
        int number = 5, num=1, count=number;


        for (int i = 0;i<count;i++) {
            System.out.print(number+" * ");
            num = num * number;
            number--;
        }
        System.out.println();
        System.out.println(num);


        System.out.println("fibonacci");
        int t1 = 1, t2 = 1;

        for (int i = 0; i <= 8; ++i) {
            System.out.print(t1 + " , ");
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
    }

}
