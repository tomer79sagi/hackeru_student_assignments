package javaLerning.src.lesson_19.enum_class;

import java.util.Arrays;

public class MainDays {
    public static void main(String[] args) {
        test1();
    }

    private static void test1() {

        Arrays.stream(Days.values()).forEach(c-> System.out.println((c)));

        System.out.println("\nLOOP\n");

        for (Days d : Days.values()){
            System.out.println(d);
        }
    }

}
