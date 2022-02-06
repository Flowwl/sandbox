import { User } from "./User";
import { content } from "../../logs";

export class ChatRoom {
    public static showMessage(user: User, message: string) {
        content(new Date().toString() + " [" + user.getName() + "] : " + message);
    }
}
