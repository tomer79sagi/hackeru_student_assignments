package javaLerning.src.lesson_20;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public enum Suit {
    HEARTS("H")
    ,SPADES("S")
    ,DIAMONDS("D")
    ,CLUBS("C");

    //props
    private final String value;
    private final static Map<String, Suit> ENUM_MAP;

    static {
        ENUM_MAP = new HashMap<>();
        for (Suit s :values()){
            ENUM_MAP.put(s.value,s);
        }
    }

    //static method
    public static Suit fromString(String text){
        return ENUM_MAP.get(text);
    }

    //ctor:
    Suit(String value){
        this.value = value;
    }

    //getters
    public String getValue(){
        return value;
    }

    //static method
    public static Suit fromStringV1(String text){
        return Arrays.stream(values())
                .filter(s ->s.value.equalsIgnoreCase(text))
                .findFirst().orElse(DIAMONDS);
    }
}
