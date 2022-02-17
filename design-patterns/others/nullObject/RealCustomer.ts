import { AbstractCustomer } from "./AbstractCustomer";

export class RealCustomer extends AbstractCustomer {
    constructor(name: string) {
        super();
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public isNil() {
        return false;
    }
}
