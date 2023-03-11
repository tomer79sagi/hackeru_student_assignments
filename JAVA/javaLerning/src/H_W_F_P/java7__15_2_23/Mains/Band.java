package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;


import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.Musician;

public class Band {
    public static void main(String[] args) {
        Musician Musician1 = new Musician("michel", "jazz", "saxophone", (short) 10);

        Musician1.printMusicianName();

        System.out.println();

        System.out.println(Musician1);
    }
}
