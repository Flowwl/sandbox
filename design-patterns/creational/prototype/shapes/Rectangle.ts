import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor() {
        super();
        this.type = "Rectangle"
    }
    draw() {
        return "I am drawing a rectangle"
    }
}
