package javaLerning.src.H_W_F_P.java12__5_3_23.Food;

import java.util.ArrayList;

public class menu {
    public static void main(String[] args) {
        ArrayList<Dish> food = new ArrayList<>();

        VeggieDish veggie1 = new VeggieDish(2, "green and blue");
        VeggieDish veggie2 = new VeggieDish(1, "red");

        DairyDish dairy1 = new DairyDish(1, 1);
        DairyDish dairy2 = new DairyDish(2,2);

        MeatDish meat1 = new MeatDish(2, "pork");
        MeatDish meat2 = new MeatDish(2, "deer");

        food.add(veggie1);
        food.add(veggie2);
        food.add(dairy1);
        food.add(dairy2);
        food.add(meat1);
        food.add(meat2);

        System.out.println(food);
    }
}
