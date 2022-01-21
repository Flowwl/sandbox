import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

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
