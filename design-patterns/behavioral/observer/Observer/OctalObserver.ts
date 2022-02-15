import { Subject } from "../Subject";
import { content } from "../../../logs";
import { Observer } from "./Observer";

export class OctalObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    public update() {
        content(`Octal String: ${this.subject.getState()}`);
    }
}
