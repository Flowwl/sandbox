import { State } from "./State";
import { content } from "../../logs";
import { Context } from "./Context";

export class StartState implements State {

    public doAction(context: Context) {
        content("Player is in start state");
        context.setState(this);
    }

    public toString() {
        return "Start State";
    }
}
