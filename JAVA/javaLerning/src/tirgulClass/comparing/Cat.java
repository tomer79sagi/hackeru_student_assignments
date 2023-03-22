package javaLerning.src.tirgulClass.comparing;

public class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    public String toString(){
        return super.toString();
    }

    @Override
    void makeSound() {
        System.out.println("mihooo");
    }
}
