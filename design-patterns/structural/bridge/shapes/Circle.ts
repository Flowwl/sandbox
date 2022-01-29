import { Shape } from "./Shape";
import { DrawAPI } from "../drawApi/DrawAPI";

export class Circle extends Shape {
    private readonly x: number
    private readonly y: number
    private readonly radius: number

    constructor(radius: number, x: number, y: number, drawAPI: DrawAPI ){
        super(drawAPI)
        this.x = x
        this.y = y
        this.radius = radius
    }

    draw() {
        return this.drawAPI.drawCircle(this.radius, this.x, this.y)
    }
}
