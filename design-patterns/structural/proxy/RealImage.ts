import { Image } from "./Image";
import { content } from "../../logs";

export class RealImage implements Image {
    private readonly fileName: string;

    public constructor(fileName: string) {
        this.fileName = fileName;
        content(this.loadFromDisk(fileName));
    }

    public display() {
        return "Displaying " + this.fileName;
    }

    private loadFromDisk(fileName: string) {
        return "Loading " + fileName;
    }
}
