package javaLerning.src.H_W_F_P.java18__29_3_23.page15.record;

public class Main {
    public static void main(String[] args) {
        test1();
    }

    private static void test1() {
        Person p = new Person("Shon", "Mor", 23);
        Person p2 = new Person("Moshe", "Kobi", 25);

        System.out.println(p.hashCode());

        System.out.println(p.equals(p2));

        System.out.println(p.name());
    }
}
