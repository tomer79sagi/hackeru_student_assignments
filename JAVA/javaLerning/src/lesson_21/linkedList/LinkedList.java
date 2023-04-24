package javaLerning.src.lesson_21.linkedList;

import java.util.StringJoiner;

public class LinkedList <T>{
    Node <T> head;

    private static class Node<T>{
        //fields
        T value;
        Node<T> next;

        public Node(T value){
            this(value,null);
        }

        private Node(T value, Node<T> next){
            this.value = value;
            this.next = next;
        }

        @Override
        public String toString() {
            return new StringJoiner("," , Node.class.getSimpleName() + "[", "]")
                    .add("value = " + value)
                    .add("next = " + next)
                    .toString();
        }
    }

}
