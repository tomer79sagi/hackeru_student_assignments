package javaLerning.src.lesson_22.recursion;

public class Factorial {

    private final int[] fibSeries = {0,1,1,2,3,5,8,13,21};
    public static int factorialR(int val){
        // Exit condition
        if (val <=1)
            return 1;

        //Example: 4
        // 4 * (4-1)
        // 3 * (3-1)
        // 2 * (2-1)
        // 1 !
        return val * factorialR(val-1);
    }

    public static int fib(int i){
        if (i <= 1){
            return i;
        }
        return fib(i-1) + fib(i-2); // o(2n)
    }

}
