package Lesson4;

import java.util.Arrays;

public class Arrays_Advanced {

    public static void main(String[] args) {

        int[] intArr = {1,2,3,4,5,6,7,8,9,10}; // Array with 10 elements, cannot dynamically resize
        String[] stringArray = {}; // Array with 0 elements
        String[] namesArr = new String[5]; // Empty array with 5 elements, cannot dynamically resize

        for (int i = 0; i < namesArr.length; i++) {
            namesArr[i] = "Ivan " +i;

        }
        System.out.println(Arrays.toString(namesArr));

    }


}
