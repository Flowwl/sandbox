import { Meal } from "./Meal";
import { VegBurger } from "./items/burgers/VegBurger";
import { Coke } from "./items/coldDrinks/Coke";
import { ChickenBurger } from "./items/burgers/ChickenBurger";
import { Pepsi } from "./items/coldDrinks/Pepsi";

export class MealBuilder {

    prepareVegMeal() {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    prepareNonVegMeal() {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}
