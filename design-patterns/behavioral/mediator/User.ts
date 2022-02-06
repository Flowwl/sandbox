import { ChatRoom } from "./ChatRoom";

export class User {
    private name: string;

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    constructor(name) {
        this.name = name;
    }

    public sendMessage(message: string) {
        ChatRoom.showMessage(this, message);
    }
}
