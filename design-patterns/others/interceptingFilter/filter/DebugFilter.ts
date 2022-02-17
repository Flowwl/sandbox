import { Filter } from "./Filter";
import { content } from "../../../logs";

export class DebugFilter implements Filter {
    public execute(request: string) {
        content("request log: " + request);
    }
}
