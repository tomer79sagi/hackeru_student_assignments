package lesson_7_HW;

public class CardOne {
    String suit;
    String color;
    String rank;


    public CardOne(String suit, String rank) {
        this.suit = suit;
        this.color = this.getColor();
        this.rank = rank;
    }

    public void print(){
        System.out.println(this);
    }

    public int getValue(){
        if (this.rank.equals("Jack")){
            return 11;
        } else if (this.rank.equals("Queen")){
            return 12;
        }else if (this.rank.equals("King")){
            return 13;
        }else if (this.rank.equals("Ace")){
            return 14;
        }else
        { return Integer.parseInt(this.rank);}
    }

    public void printValue(){
        System.out.println(this.getValue());
    }

    @Override
    public String toString() {
        return suit + " | " + rank + " | " + color;
    }

    public String getColor(){
        if (this.suit.equals("♦️") || this.suit.equals("♥️")){
            return "Red";

        }else if ((this.suit.equals("♣️") || this.suit.equals("♠️"))){
            return "Black";

        }else return "Null";
    }
}
