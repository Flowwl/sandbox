import { Observer } from "./Observer/Observer";

export class Subject {
    private observers: Observer[] = [];
    private state: number;

    public getState() {
        return this.state;
    }

    public setState(state: number) {
        this.state = state;
        this.notifyAllObservers();
    }

    public attach(observer: Observer) {
        this.observers.push(observer);
    }

    public notifyAllObservers() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}
