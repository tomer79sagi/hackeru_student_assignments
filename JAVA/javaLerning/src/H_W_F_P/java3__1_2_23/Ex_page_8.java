package javaLerning.src.H_W_F_P.java3__1_2_23;

public class Ex_page_8 {
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
            System.out.println(t1);
            int sum = t1 + t2;
            t1 = t2;
            t2 = sum;
        }
    }
}
