import AdvancedMediaPlayer from "./AdvancedMediaPlayer";

export default class Mp4Player implements AdvancedMediaPlayer {
    playVlc = (fileName: string) => {
        
    }

    playMp4 = (fileName: string) => {
        console.log("Playing vlc file. Name: "+ fileName)
    }
}