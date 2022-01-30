import { Shape } from "./Shape";

export class Rectangle implements Shape {
    draw(): string {
        return "Shape: Rectangle";
    }
}
