package javaLerning.src.H_W_F_P.java12__5_3_23.Food;

public class DairyDish extends Dish{
    int milkAmount;

    public DairyDish(int numberOfDishes, int milkAmount) {
        super(numberOfDishes);
        this.milkAmount = milkAmount;
    }

    public String toString(){
        return "the amount of dairy dishes is: " + numberOfDishes + " and milk amount is: " + milkAmount + " litter\n";
    }
}
