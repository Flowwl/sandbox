import { ComputerPartVisitor } from "./ComputerPartVisitor";
import { Computer } from "./Computer";
import { content } from "../../logs";
import { Mouse } from "./computerPart/Mouse";
import { Monitor } from "./computerPart/Monitor";
import { Keyboard } from "./computerPart/Keyboard";

export class ComputerPartDisplayVisitor implements ComputerPartVisitor {

    public visitC(computer: Computer) {
        content("Displaying Computer.");
    }

    public visitM(mouse: Mouse) {
        content("Displaying Mouse.");
    }

    public visitK(keyboard: Keyboard) {
        content("Displaying Keyboard.");
    }

    public visitMo(monitor: Monitor) {
        content("Displaying Monitor.");
    }
}
