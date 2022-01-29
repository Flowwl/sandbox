import { DrawAPI } from "./DrawAPI";

export class RedCircle implements DrawAPI{
    public drawCircle(radius: number, x: number, y: number) {
        return "Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", " + y + "]";
    }
}
