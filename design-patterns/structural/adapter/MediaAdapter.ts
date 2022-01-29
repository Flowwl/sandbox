import { MediaPlayer } from "./mediaPlayer/MediaPlayer";
import { AdvancedMediaPlayer } from "./advancedMediaPlayer/AdvancedMediaPlayer";
import { VlcPlayer } from "./advancedMediaPlayer/VlcPlayer";
import { Mp4Player } from "./advancedMediaPlayer/Mp4Player";

export class MediaAdapter implements MediaPlayer {
    advancedMusicPlayer: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if (audioType === "vlc") {
            this.advancedMusicPlayer = new VlcPlayer();
        } else if (audioType === "mp4") {
            this.advancedMusicPlayer = new Mp4Player();
        }
    }

    public play(audioType: string, fileName: string) {
        if (audioType === "vlc") {
            return this.advancedMusicPlayer.playVlc(fileName);
        } else if (audioType === "mp4") {
            return this.advancedMusicPlayer.playMp4(fileName);
        }
    }
}
