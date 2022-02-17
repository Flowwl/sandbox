import { content } from "../../../logs";
import { Service } from "./Service";

export class Service1 implements Service {
    public execute(){
        content("Executing Service1");
    }

    public getName() {
        return "Service1";
    }
}
