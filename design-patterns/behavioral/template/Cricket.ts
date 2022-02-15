import { Game } from "./Game";
import { content } from "../../logs";

export class Cricket extends Game {
    endPlay() {
        content("Cricket Game Finished!");
    }

    initialize() {
        content("Cricket Game Initialized! Start playing.");
    }

    startPlay() {
        content("Cricket Game Started. Enjoy the game!");
    }
}
