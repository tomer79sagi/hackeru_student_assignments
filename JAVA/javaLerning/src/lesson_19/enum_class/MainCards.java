package javaLerning.src.lesson_19.enum_class;

public class MainCards {
    public static void main(String[] args) {
        for (Cards c : Cards.values()){
            System.out.println(c);
        }
    }
}
