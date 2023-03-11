package javaLerning.src.lesson13.abstract_shape;

public class Rectangle extends Shape {
    Rectangle(){

    }

    public static void main(String[] args) {
        Rectangle rec = new Rectangle();

        rec.setColor("blue");
        rec.getArea();
        System.out.println(rec.getColor());
        rec.print();
    }

    public double getArea(){
        return 15;
    }

    public double getPerimeter(){
        return 20;
    }

    public void print(){
        System.out.println("Printing Rectangle information");

    }

}