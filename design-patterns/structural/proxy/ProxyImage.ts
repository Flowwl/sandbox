import { Image } from "./Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
    private realImage: RealImage;
    private readonly fileName: string;

    public constructor(fileName: string) {
        this.fileName = fileName;
    }

    public display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        return this.realImage.display();
    }
}
