import { content } from "../../../logs";
import { Service } from "./Service";

export class Service2 implements Service {
    public execute(){
        content("Executing Service2");
    }

    public getName() {
        return "Service2";
    }
}
