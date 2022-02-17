import { content } from "../../../logs";

export class Target {
    public execute(request: string) {
        content("Executing request: " + request);
    }
}
