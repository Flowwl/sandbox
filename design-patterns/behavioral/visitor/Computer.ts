import { ComputerPartVisitor } from "./ComputerPartVisitor";
import { Mouse } from "./computerPart/Mouse";
import { Keyboard } from "./computerPart/Keyboard";
import { Monitor } from "./computerPart/Monitor";
import { ComputerPart } from "./computerPart/ComputerPart";

export class Computer implements ComputerPart {
    parts: ComputerPart[];

    public constructor() {
        this.parts = [new Mouse(), new Keyboard(), new Monitor()];
    }

    public accept(computerPartVisitor: ComputerPartVisitor) {
        for (let i = 0; i < this.parts.length; i++) {
            this.parts[i].accept(computerPartVisitor);
        }
        computerPartVisitor.visitC(this);
    }
}
