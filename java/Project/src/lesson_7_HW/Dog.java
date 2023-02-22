package lesson_7_HW;

public class Dog {
    int height;
    int weight;
    String name;
    String food;
    boolean isForSale = false;

    public Dog() {
    }

    public Dog(int height, int weight, String name, String food) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.food = food;
    }

    public Dog(String name){
        this.name = name;
    }



    void eat() {
        System.out.printf("%s is eating\n", this.name);
    }

    void run() {
        System.out.printf("%s is running\n", this.name);
    }

    void play() {
        System.out.printf("%s is playing the guitar\n", this.name);
    }

    @Override
    public String toString() {
        return this.name + ":" + this.height + "cm | " + this.weight + " kg ";
    }

    static public void doX() {
        // static ==> Dog.doX(); DOESN'T need to use 'new', i.e. we don't need to create an OBJECT
        // NOT static ==> Dog dog = new Dog();, dog.doX();
//        this.name = "Tomer";
    }
}
