import { Filter } from "./Filter";
import { content } from "../../../logs";

export class AuthenticationFilter implements Filter {
    public execute(request: string) {
        content("Authenticating request: " + request);
    }
}
