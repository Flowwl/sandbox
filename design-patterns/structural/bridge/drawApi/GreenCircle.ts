import { DrawAPI } from "./DrawAPI";

export class GreenCircle implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number) {
        return "Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", " + y + "]";
    }
}
