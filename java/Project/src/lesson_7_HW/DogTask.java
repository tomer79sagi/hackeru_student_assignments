package lesson_7_HW;

public class DogTask {
    String description;

    String characteristics;

    String health;

    String training;



    public DogTask(String description, String characteristics, String health, String training) {
        this.description = description;
        this.characteristics = characteristics;
        this.health = health;
        this.training = training;
    }

    @Override
    public String toString() {
        return "DogTask{" +
                "description='" + this.description + '\'' +
                ", characteristics='" + this.characteristics + '\'' +
                ", health='" + this.health + '\'' +
                ", training='" + this.training + '\'' +
                '}';
    }
}

