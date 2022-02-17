import { BusinessService } from "./businessService/BusinessService";
import { BusinessLookUp } from "./BusinessLookUp";

export class BusinessDelegate {
    private lookupService = new BusinessLookUp();
    private businessService: BusinessService;
    private serviceType: string;

    public setServiceType(serviceType: string) {
        this.serviceType = serviceType;
    }

    public doTask() {
        this.businessService = this.lookupService.getBusinessService(this.serviceType);
        this.businessService.doProcessing();
    }
}
