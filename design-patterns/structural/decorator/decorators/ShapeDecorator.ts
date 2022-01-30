import { Shape } from "../shapes/Shape";

export abstract class ShapeDecorator implements Shape {
    protected decoratedShape: Shape;

    protected constructor(decoratedShape: Shape) {
        this.decoratedShape = decoratedShape;
    }

    public draw() {
        return this.decoratedShape.draw();
    }
}
