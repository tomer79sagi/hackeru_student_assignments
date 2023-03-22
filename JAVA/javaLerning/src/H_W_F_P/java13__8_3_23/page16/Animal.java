package javaLerning.src.H_W_F_P.java13__8_3_23.page16;

public abstract class Animal {
    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Animal (String name){
        setName(name);
    }

    abstract void makeSound();


    public String toString(){
        return "Name is: " + name + "\n";
    }
}
