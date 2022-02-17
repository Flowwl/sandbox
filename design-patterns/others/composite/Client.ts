import { content } from "../../logs";
import { CompositeEntity } from "./CompositeEntity";

export class Client {
    private compositeEntity = new CompositeEntity();

    public printData() {
        for (let i = 0; i < this.compositeEntity.getData().length; i++) {
            content("Data: " + this.compositeEntity.getData()[i]);
        }
    }

    public setData(data1: string, data2: string) {
        this.compositeEntity.setData(data1, data2);
    }
}
