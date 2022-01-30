import { Shape } from "./Shape";

export class Circle implements Shape {
    private readonly color: string;
    private x: number;
    private y: number;
    private radius: number;

    constructor(color: string) {
        this.color = color;
    }

    public setX(x: number) {
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }

    public setRadius(radius: number) {
        this.radius = radius;
    }

    draw(): string {
        return "Circle: Draw() [Color : " + this.color + ", x : " + this.x + ", y :" + this.y + ", radius :" + this.radius + "]";
    }
}
