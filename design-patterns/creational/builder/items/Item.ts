import { Packing } from "../packings/Packing";

export interface Item {
    name: string
    packing: Packing
    price: number
}
