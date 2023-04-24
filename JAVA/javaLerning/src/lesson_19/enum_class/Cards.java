package javaLerning.src.lesson_19.enum_class;

public enum Cards {
    CLUBS("♣️"),
    DIAMONDS("♦️"),
    SPADES("♠️"),
    HEARTS("♥️");

    private final String suit;

    Cards(String suit) {
        this.suit = suit;
    }

    @Override
    public String toString() {
        return "suit : " + suit + "\n";
    }
}
