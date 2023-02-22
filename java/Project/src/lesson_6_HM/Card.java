package lesson_6_HM;


public class Card {


    String suit;
    String color;
    String rank;

    public Card(String suit, String rank){

        if (rank.equals("11")){
            this.rank = "JACK";
        } else if (rank.equals("12")) {
            this.rank = "QUEEN";
        }else if (rank.equals("13")) {
            this.rank = "KING";
        }else if (rank.equals("14")) {
            this.rank = "ACE";
        }else {
            this.rank = rank;
        }

        if (suit.equals("♡") || suit.equals("♢")){
            this.color = "red";
        }else {
            this.color = "black";
        }

        this.suit = suit;
    }


    @Override
    public String toString() {
        return "your card is : " + this.rank + " " + this.suit + " " + this.color;
    }
}