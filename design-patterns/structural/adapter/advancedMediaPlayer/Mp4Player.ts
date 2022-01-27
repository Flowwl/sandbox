import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class Mp4Player implements AdvancedMediaPlayer {

    public playVlc(fileName) {/*do nothing*/}
    public playMp4(fileName) { return "Playing mp4 file. Name: " + fileName; }
}
