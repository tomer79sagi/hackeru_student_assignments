package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class BigDog {
    String Name;
    String Breed;
    Color DogColor;

    public BigDog (String Name,String Breed, Color DogColor){
        this.Name = Name;
        this.Breed = Breed;
        this.DogColor = DogColor;
    }

    public BigDog (){
        this.Name = "";
        this.Breed = "";
        this.DogColor = new Color();
    }

    @Override
    public String toString() {
        return "Name: " + this.Name +
                "\nBreed: " + this.Breed +
                "\nColor: " + this.DogColor;
    }
}
