import { Shape } from "./Shape";

export class Square extends Shape {
    constructor() {
        super();
        this.type = "Square"
    }
    draw() {
        return "I am drawing a square";
    }
}
