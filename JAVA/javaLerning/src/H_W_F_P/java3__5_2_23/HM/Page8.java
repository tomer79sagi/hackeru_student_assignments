package javaLerning.src.H_W_F_P.java3__5_2_23.HM;

public class Page8 {
    public static void main(String[] args) {

        //1
        System.out.println("1");
        for (int i=1;i<=10;i++){
            System.out.print(i+" ");
        }
        System.out.println();
        System.out.println();


        //2
        System.out.println("2");
        int number = 5, num=1, count=number;

        for (int i = 0;i<count;i++) {
            num = num * number;
            number--;
        }
        System.out.println(num);
        System.out.println();


        //3
        System.out.println("3");

        for (int i=2;i<=100;i++){
            if (i%2==0){
                System.out.print(i+" ");
            }
        }
        System.out.println();
        System.out.println();

        //4
        System.out.println("4");

        for (int i=0 ; i<=100 ; i++){
            if (i%3==0 && i%5==0){
                System.out.print(i+" ");
            }
        }
    }
}
