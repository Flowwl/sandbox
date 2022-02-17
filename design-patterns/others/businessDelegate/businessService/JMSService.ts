import { BusinessService } from "./BusinessService";
import { content } from "../../../logs";

export class JMSService implements BusinessService {

    public doProcessing() {
        content("Processing task by invoking JMS Service");
    }
}
