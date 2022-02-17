import { Service } from "./service/Service";
import { content } from "../../logs";

export class Cache {

    private services: Service[];

    public constructor() {
        this.services = [];
    }

    public getService(serviceName: string) {

        for (let service of this.services) {
            if (service.getName() === serviceName) {
                content("Returning cached  " + serviceName + " object");
                return service;
            }
        }
        return null;
    }

    public addService(newService: Service) {
        let exists = false;

        for (const service of this.services) {
            if (service.getName() === newService.getName()) {
                exists = true;
            }
        }
        if (! exists) {
            this.services.push(newService);
        }
    }
}
