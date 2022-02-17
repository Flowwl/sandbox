import { ComputerPartVisitor } from "../ComputerPartVisitor";
import { ComputerPart } from "./ComputerPart";

export class Monitor implements ComputerPart {

    public accept(computerPartVisitor: ComputerPartVisitor) {
        computerPartVisitor.visitMo(this);
    }
}
