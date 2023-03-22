package javaLerning.src.tirgulClass.comparing;

public class Cow extends Animal {
    public Cow(String name) {
        super(name);
    }

    public String toString(){
        return super.toString();
    }

    @Override
    void makeSound() {
        System.out.println("mooooo!!!");
    }
}
