import { Shape } from "./Shape";

export class Circle implements Shape {
    draw(): string {
        return "Shape: Circle";
    }
}
