import { BusinessService } from "./BusinessService";
import { content } from "../../../logs";

export class EJBService implements BusinessService {

    public doProcessing() {
        content("Processing task by invoking EJB Service");
    }
}
