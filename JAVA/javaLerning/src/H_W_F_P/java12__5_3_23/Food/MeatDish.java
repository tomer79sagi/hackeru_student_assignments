package javaLerning.src.H_W_F_P.java12__5_3_23.Food;

public class MeatDish extends Dish{
    String meatType;

    public MeatDish(int numberOfDishes, String meatType) {
        super(numberOfDishes);
        this.meatType = meatType;
    }

    public String toString(){
        return "the amount of meat dishes is: " + numberOfDishes + " and the meat type is: " + meatType + "\n";
    }
}
