import { Shape } from "./Shape";

export class Square implements Shape {
    draw(): string {
        return "Shape: Square";
    }
}
