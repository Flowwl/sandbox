import { Item } from "../Item";
import { Wrapper } from "../../packings/Wrapper";

export abstract class Burger implements Item {
    name = "Burger";
    packing = new Wrapper();

    abstract price: number;

}
