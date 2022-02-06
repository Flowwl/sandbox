import { Order } from "../Order";
import { Stock } from "./Stock";

export class SellStock implements Order {
    private abcStock: Stock;

    public constructor(abcStock: Stock) {
        this.abcStock = abcStock;
    }

    public execute() {
        this.abcStock.sell();
    }
}
