package javaLerning.src.tirgulClass.comparing;

public abstract class Animal {
    private String name;
    private int age;

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public Animal (String name){
        setName(name);
    }

    abstract void makeSound();

    public String toString(){
        return "Name is: " + name + "\n" + "Age: " + age + "\n";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)return true;

        if (obj ==null || getClass() != obj.getClass()) return false;

        Animal objanimal = (Animal)obj;

        if (this.getAge() == ((Animal)obj).getAge()) return true;

        return getName().equals(objanimal.getName());
    }
}
