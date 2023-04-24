package javaLerning.src.lesson_13.abstract_shape;

public abstract class Shape {
    protected String color;

    public abstract double getArea();
    public abstract double getPerimeter();

    public abstract void print();

    public void setColor(String color){
        this.color = color;
    }

    public String getColor(){
        return this.color;
    }

}
