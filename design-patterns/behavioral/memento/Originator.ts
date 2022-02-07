import { Memento } from "./Memento";

export class Originator {
    private state: string;

    public setState(state: string) {
        this.state = state;
    }

    public getState() {
        return this.state;
    }

    public saveStateToMemento() {
        return new Memento(this.state);
    }

    public getStateFromMemento(memento: Memento) {
        this.state = memento.getState();
    }
}
