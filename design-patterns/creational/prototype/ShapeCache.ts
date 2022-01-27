import { Shape } from "./shapes/Shape";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Square } from "./shapes/Square";
import { Record } from "../../types/types";

export class ShapeCache {
    private static shapeMap: Record<string, Shape> = {} ;

    public static getShape(shapeId: string): Shape {
        const cachedShape: Shape = this.shapeMap[shapeId];
        return cachedShape.clone();
    }

    public static loadCache() {
        const circle = new Circle();
        circle.setId("1");
        this.shapeMap = { ...this.shapeMap, [circle.getId()]: circle };

        const square = new Square();
        square.setId("2");
        this.shapeMap = { ...this.shapeMap, [square.getId()]: square };

        const rectangle = new Rectangle();
        rectangle.setId("3");
        this.shapeMap = { ...this.shapeMap, [rectangle.getId()]: rectangle };

    }
}
