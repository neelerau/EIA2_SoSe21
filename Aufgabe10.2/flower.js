"use strict";
var LandscapePolymorphie;
(function (LandscapePolymorphie) {
    class Flower {
        constructor(_position) {
            //console.log("flower constructor");
        }
        drawFlower1(_x, _y) {
            for (let index = 0; index < 7; index++) {
                let greenFlower = Math.floor(Math.random() * 100);
                let blueFlower = Math.floor(Math.random() * 100);
                let redFlower = Math.floor(Math.random() * 100);
                //Stiel
                LandscapePolymorphie.crc2.beginPath();
                LandscapePolymorphie.crc2.fillStyle = "#556B2F";
                LandscapePolymorphie.crc2.fillRect(_x - 2, _y + 10, 3, 50);
                //Blatt
                LandscapePolymorphie.crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
                LandscapePolymorphie.crc2.fill();
                //Blüten
                LandscapePolymorphie.crc2.beginPath();
                LandscapePolymorphie.crc2.fillStyle = "#D3B8CE";
                LandscapePolymorphie.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                LandscapePolymorphie.crc2.moveTo(_x, _y);
                LandscapePolymorphie.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                LandscapePolymorphie.crc2.fill();
            }
        }
        drawFlower2(_x, _y) {
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < 7; index++) {
                    let greenFlower = Math.floor(Math.random() * 200);
                    let blueFlower = Math.floor(Math.random() * 200);
                    let redFlower = Math.floor(Math.random() * 200);
                    //Stiel
                    LandscapePolymorphie.crc2.beginPath();
                    LandscapePolymorphie.crc2.fillStyle = "#556B2F";
                    LandscapePolymorphie.crc2.fillRect(_x - 2, _y + 10, 3, 50);
                    //Blatt
                    LandscapePolymorphie.crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
                    LandscapePolymorphie.crc2.fill();
                    //Blüten
                    LandscapePolymorphie.crc2.beginPath();
                    LandscapePolymorphie.crc2.fillStyle = "#D3B8CE";
                    LandscapePolymorphie.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                    LandscapePolymorphie.crc2.moveTo(_x, _y);
                    LandscapePolymorphie.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                    LandscapePolymorphie.crc2.fill();
                }
            }
        }
    }
    LandscapePolymorphie.Flower = Flower;
})(LandscapePolymorphie || (LandscapePolymorphie = {}));
//# sourceMappingURL=flower.js.map