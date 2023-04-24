package javaLerning.src.H_W_F_P.java18__29_3_23.page15;

public class Dog {

    private final String name;

    public String getName() {
        return name;
    }

    public Dog(String name) {
        this.name = name;
    }

    Dog(Dog d){
        this.name = d.name;
    }

    @Override
    public String toString() {
        return "dog name is " + getName();
    }

    public static void main(String[] args) {
        Dog d1 = new Dog("john");
        Dog d2 = new Dog (d1);

        System.out.println(d1 + ", " + d2);
    }
}
