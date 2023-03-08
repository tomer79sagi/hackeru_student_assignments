package classWork;

public class WarGameCard {
    public static void main(String[] args) {

        for (int i = 2; i < 15; i++) {
            String string = String.valueOf((i));

            Card cards = new Card("♡", string);
            System.out.println(cards);
        }

    }
}
