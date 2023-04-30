package javaLerning.src.lesson_23;

public class MainBST {
    public static void main(String[] args) {

        BST<Integer> numbersBST = new BST<>();
        numbersBST.insert(10);
        numbersBST.insert(8);
        numbersBST.insert(12);
        numbersBST.insert(9);
        numbersBST.insert(11);
        numbersBST.insert(6);
        numbersBST.insert(14);
        numbersBST.insert(7);
        numbersBST.insert(13);
        numbersBST.insert(9);
        numbersBST.insert(10);

        BST<String> stringBST = new BST<>();
        stringBST.insert("A");//65
        stringBST.insert("B");//66
        stringBST.insert("C");//67
        stringBST.insert("D");//68
        stringBST.insert("a");//97
        stringBST.insert("b");//98
        stringBST.insert("c");//99
        stringBST.insert("d");//100

        System.out.println(stringBST.getRoot());
        System.out.println();
        System.out.println(numbersBST.getRoot());
        System.out.println("\n");

        System.out.println("First -> Left -> Right");
        System.out.println("Pre Order Traversal");
        numbersBST.PreOrderTraverse();
        System.out.println();
        stringBST.PreOrderTraverse();
        System.out.println("\n\n");

        System.out.println("Left -> First -> Right");
        System.out.println("In Order Traversal");
        numbersBST.InOrderTraverse();
        System.out.println();
        stringBST.InOrderTraverse();
        System.out.println("\n\n");

        System.out.println("Left -> Right -> Print");
        System.out.println("Post Order Traversal");
        numbersBST.PostOrderTraverse();
        System.out.println();
        stringBST.PostOrderTraverse();
        System.out.println("\n\n");

        numbersBST.Max();
        //System.out.println(numbersBST.max());
        numbersBST.Min();
        //System.out.println(numbersBST.min());

        System.out.println();

        stringBST.Max();
        //System.out.println(stringBST.max());
        stringBST.Min();
        //System.out.println(stringBST.min());

    }
}
