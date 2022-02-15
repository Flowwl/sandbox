import { State } from "./State";
import { content } from "../../logs";
import { Context } from "./Context";

export class StopState implements State {

    public doAction(context: Context) {
        content("Player is in stop state");
        context.setState(this);
    }

    public toString() {
        return "Stop State";
    }
}
