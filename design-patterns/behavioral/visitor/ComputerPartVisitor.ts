import { Computer } from "./Computer";
import { Mouse } from "./computerPart/Mouse";
import { Keyboard } from "./computerPart/Keyboard";
import { Monitor } from "./computerPart/Monitor";

export interface ComputerPartVisitor {
    visitC(computer: Computer);
    visitM(mouse: Mouse);
    visitK(keyboard: Keyboard);
    visitMo(monitor: Monitor);
}
