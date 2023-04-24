package javaLerning.src.lesson_21.generucs_bounds.cup;

public record Cup <T> (T value) {
    public Cup(T value) {
        this.value = value;
    }

    public T drink(){
        return value;
    }

    @Override
    public String toString() {
        return "Cup{" +
                "value=" + value +
                '}';
    }

    public static void main(String[] args) {

    }
}
