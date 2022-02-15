import { Game } from "./Game";
import { content } from "../../logs";

export class Football extends Game {
    endPlay() {
        content("Football Finished!");
    }

    initialize() {
        content("Football Initialized! Start playing.");
    }

    startPlay() {
        content("Football Started. Enjoy the game!");
    }
}
