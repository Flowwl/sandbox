import { Shape } from "./shapes/Shape";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Square } from "./shapes/Square";

export class Factory {
    getShape(shapeName: "circle" | "rectangle" | "square") {
        switch (shapeName) {
            case "circle":
                return new Circle()
            case "rectangle":
                return new Rectangle()
            case "square":
                return new Square()
            default:
                return new Shape()
        }
    }
}
