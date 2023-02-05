package Lesson3;

public class Lesson3 {
    public static void main(String[] args) {
        System.out.println((int)(Math.random()*101));
        System.out.println((5+ (int) (Math.random()*((10-5)+1)))); // Min + (int) (Math.random()*(Max-min)+1);
        int[] fibArr = new int[15];

        printFib(fibArr);

    }

    // ----ex4-----




    public static void printFib(int[] arr) {

        int first = 1, second = 2;

        for (int i = 0; i<arr.length-1; i++){

            arr[i] = first;
            arr [i+1] = second;

            System.out.print(arr[i] + " " );



            int next = first+second;
            first = second;
            second = next;

            if (i == arr.length-2) System.out.println(first);

        }



    }


}
