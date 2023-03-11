package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class Dog {
    String Name;
    String description;
    String character;
    String health;
    String training;

    public Dog(String Name,
               String description,
               String character,
               String health,
               String training){
        this.Name = Name;
        this.description = description;
        this.character = character;
        this.health = health;
        this.training = training;
    }

    @Override
    public String toString() {
        return "Name: " + Name + "\n" +
                "Description: " + description + "\n" +
                "Character: " + character + "\n" +
                "Health: " + health + "\n" +
                "Training: " + training;
    }
}


