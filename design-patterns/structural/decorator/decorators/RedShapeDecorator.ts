import { ShapeDecorator } from "./ShapeDecorator";
import { Shape } from "../shapes/Shape";

export class RedShapeDecorator extends ShapeDecorator {

    public constructor(decoratedShape: Shape) {
        super(decoratedShape);
    }

    public draw() {
        this.setRedBorder(this.decoratedShape);
        return this.decoratedShape.draw();
    }

    private setRedBorder(decoratedShape: Shape) {
        return "Border Color: Red";
    }
}
