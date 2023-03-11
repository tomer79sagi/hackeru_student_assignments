package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;


import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.Dog;

public class DogsShow {
    public static void main(String[] args) {
        Dog jack = new Dog("Jack",
                "black dog",
                "happy",
                "generally healthy",
                "knows how to ask for food very good"
        );

        Dog Max = new Dog("Max",
                "brown dog",
                "love to sleep on the couch",
                "healthy",
                "bringing beer from the fridge"
        );

        System.out.println(jack);
        System.out.println();
        System.out.println(Max);
    }
}
