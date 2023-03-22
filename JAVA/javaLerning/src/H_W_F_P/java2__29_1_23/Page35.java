package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Page35 {
    public static void main(String[] args) {
        oneToTen();
        duplicate();
        evenNumbers();
        divisibleNumbers();
    }

    private static void oneToTen() {
        System.out.println("1-10");

        for (int i = 1; i <= 10; i++) {
            System.out.print(i + ",");
        }
        System.out.println("\n");
    }

    private static void duplicate() {
        System.out.println("1*2*3*4*5");

        int number = 5, num = 1, count = number;

        for (int i = 0; i < count; i++) {
            num = num * number;
            number--;
        }
        System.out.println(num);
        System.out.println();
    }

    public static void evenNumbers() {
        System.out.println("Even numbers");

        for (int i = 0; i <= 100;i++){
            if (i%2 == 0){
                System.out.print(i + ",");
            }
        }
        System.out.println("\n");
    }

    private static void divisibleNumbers(){
        System.out.println("numbers divisible by 3 and 5");

        for (int i = 0; i <= 100; i++) {
            if (i%3 == 0 && i%5 == 0){
                System.out.print(i+",");
            }
        }
        System.out.println();
    }
}

