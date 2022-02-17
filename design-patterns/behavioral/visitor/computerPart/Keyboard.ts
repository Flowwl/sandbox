import { ComputerPartVisitor } from "../ComputerPartVisitor";
import { ComputerPart } from "./ComputerPart";

export class Keyboard implements ComputerPart {

    public accept(computerPartVisitor: ComputerPartVisitor) {
        computerPartVisitor.visitK(this);
    }
}
