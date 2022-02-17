import { AbstractCustomer } from "./AbstractCustomer";
import { RealCustomer } from "./RealCustomer";
import { NullCustomer } from "./NullCustomer";

export class CustomerFactory {

    public static names = ["Rob", "Joe", "Julie"];

    public static getCustomer(name: string): AbstractCustomer {
        for (let i = 0; i < this.names.length; i++) {
            if (this.names[i] === name) {
                return new RealCustomer(name);
            }
        }
        return new NullCustomer();
    }
}
