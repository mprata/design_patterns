"use strict";
exports.__esModule = true;
var MediaAdapter_1 = require("./MediaAdapter");
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
        var _this = this;
        this.play = function (audioType, fileName) {
            //inbuilt support to play mp3 music files
            if (audioType === "mp3") {
                console.log("Playing mp3 file. Name: " + fileName);
            }
            //mediaAdapter is providing support to play other file formats
            else if (audioType === "vlc" || audioType === "mp4") {
                _this.mediaAdapter = new MediaAdapter_1["default"](audioType);
                _this.mediaAdapter.play(audioType, fileName);
            }
            else {
                console.log("Invalid media. " + audioType + " format not supported");
            }
        };
    }
    return AudioPlayer;
}());
exports["default"] = AudioPlayer;
