export class Memento {
    private state: string;

    public constructor(state: string) {
        this.state = state;
    }

    public getState() {
        return this.state;
    }
}
