import { AbstractCustomer } from "./AbstractCustomer";

export class NullCustomer extends AbstractCustomer {

    public getName() {
        return "Not Available in Customer Database";
    }

    public isNil() {
        return true;
    }
}
