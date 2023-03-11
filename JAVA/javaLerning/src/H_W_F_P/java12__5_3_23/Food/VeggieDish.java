package javaLerning.src.H_W_F_P.java12__5_3_23.Food;

public class VeggieDish extends Dish{
    String colors;

    public VeggieDish(int numberOfDishes, String colors) {
        super(numberOfDishes);
        this.colors = colors;
    }

    public String toString(){
        return "the amount of veggie dishes is: " + numberOfDishes + " and the color is: " + colors + "\n";
    }
}
