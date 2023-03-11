package javaLerning.src.H_W_F_P.java12__5_3_23.Animals;

public class Dog extends Animal{

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
}
