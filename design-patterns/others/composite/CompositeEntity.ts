import { CoarseGrainedObject } from "./CoarseGrainedObject";

export class CompositeEntity {
    private cgo = new CoarseGrainedObject();

    public setData(data1: string, data2: string) {
        this.cgo.setData(data1, data2);
    }

    public getData() {
        return this.cgo.getData();
    }
}
