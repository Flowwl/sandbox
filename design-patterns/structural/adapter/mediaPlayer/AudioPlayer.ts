import { MediaPlayer } from "./MediaPlayer";
import { MediaAdapter } from "../MediaAdapter";

export class AudioPlayer implements MediaPlayer {
    mediaAdapter: MediaAdapter;

    public play(audioType: string, fileName: string) {
        if (audioType === "mp3") {
            return "Playing mp3 file. Name: " + fileName;
        }
        else if (audioType === "vlc" || audioType === "mp4") {
            this.mediaAdapter = new MediaAdapter(audioType);
            return this.mediaAdapter.play(audioType, fileName);
        } else {
            return "Invalid media. " + audioType + " format not supported";
        }
    }
}
