import { AbstractLogger } from "./AbstractLogger";
import { content } from "../../logs";

export class FileLogger extends AbstractLogger {

    constructor() {
        super(AbstractLogger.DEBUG);
    }
    protected write(message: string) {
        content("File::Logger: " + message);
    }
}
