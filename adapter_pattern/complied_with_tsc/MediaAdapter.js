"use strict";
exports.__esModule = true;
var VlcPlayer_1 = require("./VlcPlayer");
var Mp4Player_1 = require("./Mp4Player");
var MediaAdapter = /** @class */ (function () {
    function MediaAdapter(audioType) {
        var _this = this;
        this.play = function (audioType, fileName) {
            if (audioType === "vlc") {
                _this.advancedMusicPlayer.playVlc(fileName);
            }
            else if (audioType === "mp4") {
                _this.advancedMusicPlayer.playMp4(fileName);
            }
        };
        if (audioType === "vlc") {
            this.advancedMusicPlayer = new VlcPlayer_1["default"]();
        }
        else if (audioType === "mp4") {
            this.advancedMusicPlayer = new Mp4Player_1["default"]();
        }
    }
    return MediaAdapter;
}());
exports["default"] = MediaAdapter;
