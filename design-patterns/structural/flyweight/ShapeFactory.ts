import { Circle } from "./shapes/Circle";

export class ShapeFactory {

    private static circleMap = {};

    public static getCircle(color: string) {
        let circle = this.circleMap[color];

        if (!circle) {
            circle = new Circle(color);
            this.circleMap[color] = circle;
        }
        return circle;
    }
}
