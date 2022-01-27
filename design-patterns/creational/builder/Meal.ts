import { Item } from "./items/Item";

export class Meal {
    private items: any

    constructor() {
        this.items = []
    }
    addItem(item: Item) {
        this.items.push(item)
    }

    getCost() {
        return this.items.reduce((acc, it) => acc + it.price, 0)
    }

    showItems(): any {
        return this.items.map((it) => (`Item: ${it.name}, Packing: ${it.packing.pack}, Price: ${it.price}`))
    }
}
