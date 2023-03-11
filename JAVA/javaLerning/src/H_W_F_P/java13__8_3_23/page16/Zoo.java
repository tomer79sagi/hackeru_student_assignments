package javaLerning.src.H_W_F_P.java13__8_3_23.page16;

import java.util.ArrayList;

public class Zoo {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();

        Animal animal1 = new Animal("monkey");

        Dog dog1 = new Dog("jonny");
        Dog dog2 = new Dog("mike", "brown");

        Cat cat1 = new Cat("batata");
        Cat cat2 = new Cat("cupcake");

        Cow cow1 = new Cow("Moomi");
        Cow cow2 = new Cow("yosi");

        animals.add(animal1);
        animals.add(dog1);
        animals.add(dog2);
        animals.add(cat1);
        animals.add(cat2);
        animals.add(cow1);
        animals.add(cow2);

        System.out.println(animals);
        System.out.println(dog2.getName());
        dog2.setName("mama");
        System.out.println(dog2.getName());

    }
}