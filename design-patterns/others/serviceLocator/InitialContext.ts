import { content } from "../../logs";
import { Service1 } from "./service/Service1";
import { Service2 } from "./service/Service2";
import { Service } from "./service/Service";

export class InitialContext {
    public lookup(jndiName: string): Service | null {
        if (jndiName === "SERVICE1") {
            content("Looking up and creating a new Service1 object");
            return new Service1();
        } else if (jndiName === "SERVICE2") {
            content("Looking up and creating a new Service2 object");
            return new Service2();
        }
        return null;
    }
}
