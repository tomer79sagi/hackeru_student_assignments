package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class Musician {
    String Name;
    String style;
    String instrument;
    short experience;

    public Musician(String Name, String style , String instrument , short experience){
        this.Name = Name;
        this.style = style;
        this.instrument = instrument;
        this.experience = experience;
    }

    public void printMusicianName(){
        System.out.println(this.Name);
        System.out.println(this.experience + " years of experience");
    }

    public String toString(){
        return this.Name + "\n" + this.experience + " years of experience";
    }
}
