import { Cache } from "./Cache";
import { InitialContext } from "./InitialContext";

export class ServiceLocator {
    private static cache = new Cache();

    public static getService(jndiName: string) {
        const service = this.cache.getService(jndiName);

        if (service != null) {
            return service;
        }

        const context = new InitialContext();
        const service1 = context.lookup(jndiName);
        this.cache.addService(service1);
        return service1;
    }
}
