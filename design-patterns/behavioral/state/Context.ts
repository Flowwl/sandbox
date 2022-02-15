import { State } from "./State";

export class Context {
    private state: State | null;

    public constructor() {
        this.state = null;
    }

    public setState(state: State) {
        this.state = state;
    }

    public getState() {
        return this.state;
    }
}
