package javaLerning.src.tirgulClass.comparing;

//equals

public class equals1 {
    public static void main(String[] args) {
        person Tomer = new person("307926170");
        person Tomer2 = new person("307926170");
        person John = Tomer;

        System.out.println("Person ref equals:\t" + Tomer.equals(John));
        System.out.println("Person obj equals:\t" + Tomer.equals(Tomer2));

        String str1 = "tomer";
        String str2 = "tomer";

        System.out.println("String equals:\t\t" + str1.equals(str2));

    }
}
