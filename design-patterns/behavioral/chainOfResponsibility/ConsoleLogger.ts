import { content } from "../../logs";
import { AbstractLogger } from "./AbstractLogger";

export class ConsoleLogger extends AbstractLogger {

    constructor() {
        super(AbstractLogger.INFO);
    }
    protected write(message: string) {
        content("Standard Console::Logger: " + message);
    }
}
