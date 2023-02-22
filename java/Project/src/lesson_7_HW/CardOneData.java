package lesson_7_HW;

public class CardOneData {
    public static void main(String[] args) {
        String[] suit = {"♦️","♥️","♣️","♠️"};
        String[] rank = {"2","3","4","5","6","7","8","9","10","Jack","Queen", "King", "Ace"};

        for (int i = 0; i < suit.length; i++) {
            for (int j = 0; j < rank.length; j++) {
                CardOne card = new CardOne(suit[i], rank[j]);
                card.print();
            }
            System.out.println("------------");
        }

    }
}
