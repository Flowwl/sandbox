import { Dispatcher } from "./Dispatcher";
import { content } from "../../logs";

export class FrontController {
    private dispatcher: Dispatcher;

    public constructor() {
        this.dispatcher = new Dispatcher();
    }

    private isAuthenticUser() {
        content("User is authenticated successfully.");
        return true;
    }

    private trackRequest(request: string) {
        content("Page requested: " + request);
    }

    public dispatchRequest(request: string) {
        //log each request
        this.trackRequest(request);

        //authenticate the user
        if (this.isAuthenticUser()) {
            this.dispatcher.dispatch(request);
        }
    }
}
