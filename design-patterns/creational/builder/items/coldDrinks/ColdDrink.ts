import { Item } from "../Item";
import { Bottle } from "../../packings/Bottle";

export abstract class ColdDrink implements Item {
    name = "ColdDrink";
    packing = new Bottle();

    abstract price: number;
}
