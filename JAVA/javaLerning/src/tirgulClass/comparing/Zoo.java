package javaLerning.src.tirgulClass.comparing;

import java.util.ArrayList;

public class Zoo {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();

        Dog dog1 = new Dog("jonny");
        Dog dog2 = new Dog("mike", "brown");

        Cat cat1 = new Cat("batata");
        Cat cat2 = new Cat("cupcake");

        Cow cow1 = new Cow("Moomi");
        Cow cow2 = new Cow("yosi");

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

        animals.forEach(Animal::makeSound);

    }
}