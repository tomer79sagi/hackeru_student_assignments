package javaLerning.src.tirgulClass.comparing;

public class Dog extends Animal {

    String furType;

    public Dog(String name){
        this(name,"don't no");
    }

    public Dog(String name ,String furType) {
        super(name);
        this.furType = furType;
    }

    public String toString(){
        return super.toString() + " | fur type : " + furType +"\n";
    }

    void makeSound(){
        System.out.println("awo awo");
    }
}
