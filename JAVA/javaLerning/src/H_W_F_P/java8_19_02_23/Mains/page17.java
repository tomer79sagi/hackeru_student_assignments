package javaLerning.src.H_W_F_P.java8_19_02_23.Mains;

public class page17 {
    public static void main(String[] args) {
        e1();
        e2();

    }
    public static void e1(){
        char[] date = {'a', 'b', 'c'};
        String newDate = new String(date);

        System.out.println(newDate);
    }

    public static void e2(){
        String str = "Hello, World";
        String subHello = new String(str.toCharArray(), str.length()-5, 5);
        String subHello2 = str.substring(str.length()-5);

        System.out.println(subHello);
        System.out.println(subHello2);
    }

    public static void e3(){
        String str = "Hello, World";

        int countChar = (int)str.chars().filter(ch -> ch == 'l').count();
    }
}
