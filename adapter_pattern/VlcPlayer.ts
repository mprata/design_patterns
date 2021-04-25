import AdvancedMediaPlayer from "./AdvancedMediaPlayer";

export default class VlcPlayer implements AdvancedMediaPlayer {
    playVlc = (fileName: string) => {
        console.log("Playing vlc file. Name: "+ fileName)
    }

    playMp4 = (fileName: string) => {
        
    }
}