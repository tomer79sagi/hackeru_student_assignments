package javaLerning.src.lesson_22.page14.linkedList;

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

//    public void removeByIndex(int index){
//
//        if (index < 1 || index > size){
//            throw new ArrayIndexOutOfBoundsException();
//        }
//
//        if (index == 1){
//            head = head.next;
//        } else {
//            Node<T> prevNode = head;
//            for (int i = 1; i < index -1; i++) {
//                prevNode = prevNode.next;
//            }
//            prevNode.next = prevNode.next.next;
//        }
//        size--;
//    }

    public void removeByValue(T value){
        if (isEmpty()){
            return;
        }

        if (head.value.equals(value)){
            head = head.next;
            size--;
            return;
        }

        Node<T> currentNode = head;
        while (currentNode.next != null){
            if (currentNode.next.value.equals(value)){
                currentNode.next = currentNode.next.next;
                if (currentNode.next == null){
                    last = currentNode;
                }
                size--;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    public LinkedList<T> reverse() {
        // 1. Create LinkedList<T> to hold the new reversed list

        // 2. Convert LinkedList to Array
        // - Create array of size .getSize()
        // - 'while' loop over .next() objects that are not null
        // - Add each element to array

        // 3. Iterate over array from last to first
        // - Add nodes to the new LinkedList

        // 4. Return new linkedlist
        return null;
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
        System.out.println("[" + head.value.getClass()
                .getSimpleName() + "]" + toString());
    }

    public int indexOf(T value) {
        int index = 0;
        Node<T> currentNode = head;
        while (currentNode != null) {
            if (currentNode.value.equals(value)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
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
