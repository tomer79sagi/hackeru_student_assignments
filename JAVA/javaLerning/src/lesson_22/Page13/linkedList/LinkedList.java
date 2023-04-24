package javaLerning.src.lesson_22.Page13.linkedList;

public class LinkedList<T>{
    private Node<T> head; // First
    private Node<T> last; // lsat
    private int size = 0; // LinkedList size

    private boolean isEmpty() {
        return head == null;
    }

    // 'Builder' design pattern
    //1. Create new Node, list is empty, srt head & last
    //2. Create new Node, list is NOT empty, return thr Node
    private Node<T> createNode(T value){
        Node<T> n =new Node<>(value);

        if (isEmpty()) {
            head = last = n; // Logic already exists. Need to find a solution for re-use
            return null;
        }
        return n;
    }

    public void prepend(T value){
        Node<T> n = createNode(value);

        if (n != null){
            // Change 'head' to be second temporarily
            n.next = head;

            // Set 'head' to point o 'n' (the first element)
            head = n;
        }

        size ++;
    }

    // Example: LinkedList with 3 elements, index = 2
    public void add(int index, T value) {
        // Check for exceptions
        if (index > size || index < 1)
            throw new ArrayIndexOutOfBoundsException();

        // Index is valid
        // 1. Trying to add at the start, use 'prepend()'
        if (index == 1){
            prepend(value);
            return;
        // 2. Trying to add as the last element, use 'add()'
        } else if (index == size) {
            add(value);
            return;
        }

        // 4. Add somewhere in the middle of the LinkedList
        Node<T> n = createNode(value);
        if (n != null){
            Node<T> cNode = head;
            for (int i = 1; i < index - 1; i++) {
                cNode = cNode.next;
            }

            // cNode = Node at the index to be replaced
            // the 'next' of the new Node => next of the one before the 'index'
            n.next = cNode.next;

            cNode.next = n;
        }

        size ++;
    }

    public void add(T value) {
        Node<T> n = createNode(value);

        if (n != null){
            // Attach the new one after the last one
            last.next = n;

            // Change the 'last' object to point to the 'new' last object
            last = n;
        }

        size ++;
    }

    @Override
    public String toString() {
       String s = "";

       Node<T> cNode = head;
       while (cNode != null){
           s += " : " + cNode;
           cNode = cNode.next;
       }

       return s;
    }

    public void print(){
        System.out.println("[" + head.value.getClass().getSimpleName() + "]" + toString());
    }

    public int getSize() {
        return size;
    }

    // Node<T> is ONLY used by the LinkedList class to manage the data structure
    // CANNOT be accessed from the outside
    private static class Node<T> {
        //fields:
        T value;
        Node<T> next;
        //constructors:
        public Node(T value) {
            this(value, null);
        }
        private Node(T value, Node<T> next) {
            this.value = value;
            this.next = next;
        }

        @Override
        public String toString() {
            return value.toString();
        }
    }
}
