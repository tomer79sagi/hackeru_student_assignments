package javaLerning.src.H_W_F_P.java7__15_2_23.Mains;

import javaLerning.src.H_W_F_P.java7__15_2_23.classWork.GameCard;

public class WarGameCard {
    public static void main(String[] args) {

        for (int i = 2; i < 15; i++) {
            String string = String.valueOf((i)); // "1" -> "2" -> "3"

            GameCard cards = new GameCard("♡", string);
            System.out.println(cards);
        }
        System.out.println("\ncard");
    }
}
