"use strict";
exports.__esModule = true;
var VlcPlayer = /** @class */ (function () {
    function VlcPlayer() {
        this.playVlc = function (fileName) {
            console.log("Playing vlc file. Name: " + fileName);
        };
        this.playMp4 = function (fileName) {
        };
    }
    return VlcPlayer;
}());
exports["default"] = VlcPlayer;
