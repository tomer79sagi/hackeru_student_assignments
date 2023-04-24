package javaLerning.src.lesson_21.generucs_bounds;

import java.util.List;

public class MathG {
    private static <T extends Number> double sum(List<T> list){
        double sum = 0;

        for (T t : list){
            sum += t.doubleValue();
        }

        return sum;
    }

    public static <E extends Comparable<E>> int countLargerThen(List<E> list, E value){
        int count = 0;

        for (E element : list){
            if (element.compareTo(value) > 0){
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        List<Integer> l = List.of(1,2,3,4,5,5,6,56);
        double val = sum(l);
        System.out.println("\nInteger List: " + val);

        List<Float> f = List.of(0.1f,0.3f,0.5f,0.5f,2.3f,4.5f);
        double val2 = sum(f);
        System.out.println("\nFloat List: " + val2);

        List<Person> p = List.of(new Person(),new Person(),new Person());
        double val3 = sum(p);
        System.out.println("\nPerson List: " + val3);

       double val4 = countLargerThen(p , new Person());
        System.out.println("\nCount List: " + val4);
    }
}
