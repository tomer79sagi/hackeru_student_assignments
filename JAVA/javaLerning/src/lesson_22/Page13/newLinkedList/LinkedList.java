package javaLerning.src.lesson_22.Page13.newLinkedList;

import java.util.StringJoiner;

public class LinkedList <T>{
    Node<T> head;

    private boolean isEmpty(){
        return head == null;
    }

    public void add(T value){
        Node<T> n = new Node<>(value);

        if (isEmpty()){
            n = head;
        }
    }

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
