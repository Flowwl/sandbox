export abstract class AbstractLogger {
    public static INFO = 1;
    public static DEBUG = 2;
    public static ERROR = 3;

    protected level: number;

    constructor(level: number) {
        this.level = level
    }
    //next element in chain or responsibility
    protected nextLogger: AbstractLogger;

    setNextLogger(nextLogger: AbstractLogger) {
        this.nextLogger = nextLogger;
    }

    public logMessage(level: number, message: string) {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger) {
            this.nextLogger.logMessage(level, message);
        }
    }

    protected abstract write(message: string);

}
