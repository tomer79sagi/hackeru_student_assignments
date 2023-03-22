package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Time {
    public static void main(String[] args) {
        int minutes = 267;

        int hours = minutes/60;
        int minute = minutes%60;

        System.out.println(hours + ":" + minute);
        System.out.printf("%02d:%02d%n",hours,minute);
    }
}
