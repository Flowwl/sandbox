import { Cloneable } from "../Cloneable";

export abstract class Shape extends Cloneable {
    private id: string;
    protected type: string;

    abstract draw(): string

    public getType(){
        return this.type;
    }

    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    clone() {
        let clone = null;
        try {
            clone = super.clone();
        } catch (e) {
            console.error(e)
        }
        return clone
    }

    toString() {
        return this.type
    }
}
