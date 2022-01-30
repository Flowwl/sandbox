import { Shape } from "./shapes/Shape";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Square } from "./shapes/Square";

export class ShapeMaker {
    private circle: Shape;
    private rectangle: Shape;
    private square: Shape;

    public constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public drawCircle(){
        return this.circle.draw();
    }
    public drawRectangle(){
        return this.rectangle.draw();
    }
    public drawSquare(){
        return this.square.draw();
    }
}
