package javaLerning.src.lesson_23.Binary_search_tree;

import java.util.Objects;

//BST = Binary search tree
public class BST<T extends Comparable<T>> {

    private Node<T> root;

    public boolean isEmpty() {
        return root == null;
    }


    public void insert(T value){
        Node<T> newNode = new Node<>(value);

        if (isEmpty()){
            root = newNode;
            return;
        }
        // call the recursive func
        insert(root, newNode);
    }
    private void insert(Node<T> root, Node<T> newNode){
        if (root.value.compareTo(newNode.value) <= 0) {
            if (root.getRight() == null){
                root.right = newNode;
            }else {
                insert(root.getRight(), newNode);
            }
        }else {
            if (root.getLeft() == null){
                root.left = newNode;
            }else {
                insert(root.getLeft(), newNode);
            }
        }
    }

    // just to show if works
    public Node<T> getRoot(){
        return root;
    }


    public void PreOrderTraverse(){
        PreOrderTraverse(root);
    }
    private void PreOrderTraverse(Node<T> root) {
        // 0. Check if root == null, return control if so
        if (root == null) {
            // Going back and check right side
            return;
        }
        // 1. Print the root first (preorder ==> root first, leaves second)
        System.out.print(root.getValue() + ", ");
        // 2. Recursion left
        PreOrderTraverse(root.getLeft());
        // 3. Recursion right
        PreOrderTraverse(root.getRight());
    }


    public void InOrderTraverse(){
        InOrderTraverse(root);
    }
    private void InOrderTraverse(Node<T> root) {
        // 0. Check if root == null, return control if so
        if (root == null) {
            // Going back and check right side
            return;
        }
        // 1. Recursion left
        InOrderTraverse(root.getLeft());
        // 2. Print the leftest first
        System.out.print(root.getValue() + ", ");
        // 3. Recursion right
        InOrderTraverse(root.getRight());
    }


    public void PostOrderTraverse(){
        PostOrderTraverse(root);
    }
    private void PostOrderTraverse(Node<T> root) {
        // 0. Check if root == null, return control if so
        if (root == null) {
            // Going back and check right side
            return;
        }
        // 1. Recursion left
        PostOrderTraverse(root.getLeft());
        // 2. Recursion right
        PostOrderTraverse(root.getRight());
        // 3. Print the leftest first
        System.out.print(root.getValue() + ", ");
    }


    private Node<T> findMaxNode(){
        if (isEmpty())
            return null;

        return findMaxNode(root);
    }
    private Node<T> findMaxNode(Node<T> root){
        // if we have a right node
        if (root.getRight() != null){
            return findMaxNode(root.getRight());
        }
        return root;
    }
    public void Max(){
        Node<T> max = findMaxNode();
        if (max != null){
            System.out.println("The maximum value is: " + max.getValue());
        }else {
            System.out.println("There is NOTING in the binary tree");
        }
    }
    public T max(){
        Node<T> max = findMaxNode();
        return max != null ? max.getValue() : null;
    }



    private Node<T> findMinNode(){
        if (isEmpty())
            return null;

        return findMinNode(root);
    }

    private Node<T> findMinNode(Node<T> root){
        // if we have a right node
        if (root.getLeft() != null){
            return findMinNode(root.getLeft());
        }
        return root;
    }

    public void Min(){
        Node<T> min = findMinNode();
        if (min != null){
            System.out.println("The minimum value is: " + min.getValue());
        }else {
            System.out.println("There is NOTING in the binary tree");
        }
    }
    public T min(){
        Node<T> min = findMinNode();
        return min != null ? min.getValue() : null;
    }


//    public boolean search(T value){
//        if (root == null)return false; //empty tree?
//        return search(root, value);//not empty -> recursive method
//    }

    public void print(){

    }

    private class Node<T extends Comparable<T>>{

        private T value;
        private Node<T> right;
        private Node<T> left;
        //ctor:
        public Node(T value) {
            this.value = value;
        }
        //get/set value
        public T getValue() {
            return value;
        }
        public void setValue(T value) {
            this.value = value;
        }
        //get right, left
        public Node<T> getRight() {
            return right;
        }
        public Node<T> getLeft() {
            return left;
        }
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Node<?> node = (Node<?>) o;
            return Objects.equals(value, node.value)
                    && Objects.equals(right, node.right)
                    && Objects.equals(left, node.left);
        }

        @Override
        public int hashCode() {
            return Objects.hash(value, right, left);
        }

        @Override
        public String toString() {
            return "value = " + getValue() + " -> Right value = " + getRight() + " <- Left value = " + getLeft();

//            return new StringJoiner(", ", Node.class.getSimpleName() + "[", "]")
//                    .add("value = " + value)
//                    .add("right = " + right)
//                    .add("left = " + left)
//                    .toString();
        }
    }
}
