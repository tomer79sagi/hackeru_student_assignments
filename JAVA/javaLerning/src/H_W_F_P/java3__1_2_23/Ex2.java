package javaLerning.src.H_W_F_P.java3__1_2_23;

public class Ex2 {
    public static void main(String[] args) {
        int minutes = 267;

        int hours = minutes/60;
        int minute = minutes%60;

        System.out.println(hours + ":" + minute);
        System.out.printf("%02d:%02d%n",hours,minute);
        System.out.println(hours + " hours and " + minute + " minutes");
    }
}
