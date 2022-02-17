import { BusinessDelegate } from "./BusinessDelegate";

export class Client {
    businessService: BusinessDelegate;

    public constructor(businessService: BusinessDelegate) {
        this.businessService = businessService;
    }

    public doTask() {
        this.businessService.doTask();
    }
}
