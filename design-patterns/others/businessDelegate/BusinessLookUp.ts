import { EJBService } from "./businessService/EJBService";
import { JMSService } from "./businessService/JMSService";
import { BusinessService } from "./businessService/BusinessService";

export class BusinessLookUp {

    public getBusinessService(serviceType: string): BusinessService {
        if (serviceType === "EJB") {
            return new EJBService();
        } else {
            return new JMSService();
        }
    }
}
