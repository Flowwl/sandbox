import { Container } from "./Container";
import { Iterator } from "./Iterator";

export class NameRepository implements Container {
    public names = ["Robert", "John", "Julie", "Lora"];

    public getIterator(): Iterator {
        return new NameIterator(this.names);
    }

}

class NameIterator implements Iterator {
    index: number;
    names: string[]

    constructor(names: string[]) {
        this.names = names
    }

    public hasNext() {
        return this.index < this.names.length;
    }

    public next() {
        if (this.hasNext()) {
            return this.names[this.index++];
        }
        return null;
    }
}
