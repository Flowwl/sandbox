import { ComputerPartVisitor } from "../ComputerPartVisitor";
import { ComputerPart } from "./ComputerPart";

export class Mouse implements ComputerPart {

    public accept(computerPartVisitor: ComputerPartVisitor) {
        computerPartVisitor.visitM(this);
    }
}
