package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class student {
    String Name;

    public student(String Name){
        this.Name = Name;
    }

    public void printName(){
        System.out.println(this.Name);
    }

    @Override
    public String toString() {
        return "my Name is " + this.Name;
    }
}
