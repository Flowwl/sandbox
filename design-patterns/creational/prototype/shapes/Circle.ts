import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor() {
        super();
        this.type = "Circle"
    }
    draw() {
        return "I am drawing a circle"
    }
}
