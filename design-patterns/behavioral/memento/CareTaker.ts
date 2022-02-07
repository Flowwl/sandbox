import { Memento } from "./Memento";

export class CareTaker {
    private mementoList: Memento[] = [];

    public add(state: Memento) {
        this.mementoList.push(state);
    }

    public get(index: number) {
        return this.mementoList[index];
    }
}
