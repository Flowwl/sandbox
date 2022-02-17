import { DependentObject1 } from "./DependentObject1";
import { DependentObject2 } from "./DependentObject2";

export class CoarseGrainedObject {
    do1 = new DependentObject1();
    do2 = new DependentObject2();

    public setData(data1: string, data2: string) {
        this.do1.setData(data1);
        this.do2.setData(data2);
    }

    public getData() {
        return [this.do1.getData(), this.do2.getData()];
    }
}
