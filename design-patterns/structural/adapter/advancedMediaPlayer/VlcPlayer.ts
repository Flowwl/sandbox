import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class VlcPlayer implements AdvancedMediaPlayer {
    public playVlc(fileName) {return "Playing vlc file. Name: " + fileName;}
    public playMp4(fileName) { }
}
