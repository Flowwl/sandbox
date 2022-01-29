import { DrawAPI } from "../drawApi/DrawAPI";

export abstract class Shape {
    protected drawAPI: DrawAPI;

    protected constructor(drawAPI: DrawAPI) {
        this.drawAPI = drawAPI
    }
    public abstract draw(): void;
}
