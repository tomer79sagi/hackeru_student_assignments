package tasting;

public class student {
    String Name;

    public student(String Name){
        this.Name = Name;
    }

    @Override
    public String toString() {
        return "my Name is " + this.Name;
    }
}
