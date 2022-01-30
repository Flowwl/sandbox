import { AbstractLogger } from "./AbstractLogger";
import { content } from "../../logs";

export class ErrorLogger extends AbstractLogger {

    constructor() {
        super(AbstractLogger.ERROR);
    }
    protected write(message: string) {
        content("Error Console::Logger: " + message);
    }
}
