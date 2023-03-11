package javaLerning.src.H_W_F_P.java12__5_3_23.Animals;

public class Animal {
    String name;

    public Animal(String name){
        this.name = name;
    }

    void makeSound(){
        System.out.println("Making sound");
    }

    public String toString(){
        return "Name is: " + name + "\n";
    }
}
