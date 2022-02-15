import { Observer } from "./Observer";
import { Subject } from "../Subject";
import { content } from "../../../logs";

export class HexaObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    public update() {
        content(`Hexa String: ${this.subject.getState()}`);
    }
}
