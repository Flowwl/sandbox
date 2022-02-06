import { content } from "../../../logs";

export class Stock {
    private name = "ABC";
    private quantity = 10;

    public buy(){
        content("Stock [ Name: "+ this.name +", Quantity: " + this.quantity +" ] bought");
    }
    public sell(){
        content("Stock [ Name: "+ this.name+", Quantity: " + this.quantity +" ] sold");
    }
}
