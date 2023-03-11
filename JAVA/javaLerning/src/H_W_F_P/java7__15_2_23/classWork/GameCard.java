package javaLerning.src.H_W_F_P.java7__15_2_23.classWork;

public class GameCard {
    String suit; // shape of card
    String color;
    String rank; // cards number

    public GameCard(String suit, String rank){

        switch (rank) {
            case "11" -> this.rank = "JACK";
            case "12" -> this.rank = "QUEEN";
            case "13" -> this.rank = "KING";
            case "14", "1" -> this.rank = "ACE";
            default -> this.rank = rank;
        }

        if (suit.equals("♡") || suit.equals("♢")){
            this.color = "red";
        }else if (suit.equals("♣") || suit.equals("♠")){
            this.color = "black";
        }else {
            this.color = "null";
        }
        this.suit = suit;
    }

    @Override
    public String toString() {
        return "your card is : " + this.rank + " " + this.suit + " " + this.color;
    }
}
