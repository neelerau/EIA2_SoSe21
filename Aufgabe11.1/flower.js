"use strict";
var Landscape11;
(function (Landscape11) {
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
                Landscape11.crc2.beginPath();
                Landscape11.crc2.fillStyle = "#597459";
                Landscape11.crc2.fillRect(_x - 2, _y + 10, 3, 50);
                //Blatt
                Landscape11.crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
                Landscape11.crc2.fill();
                //Blüten
                Landscape11.crc2.beginPath();
                Landscape11.crc2.fillStyle = "#D3B8CE";
                Landscape11.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                Landscape11.crc2.moveTo(_x, _y);
                Landscape11.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                Landscape11.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                Landscape11.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                Landscape11.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                Landscape11.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                Landscape11.crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                Landscape11.crc2.fill();
            }
        }
        drawFlower2(_x, _y) {
            for (let index = 0; index < 5; index++) {
                for (let index = 0; index < 7; index++) {
                    let greenFlower = Math.floor(Math.random() * 200);
                    let blueFlower = Math.floor(Math.random() * 200);
                    let redFlower = Math.floor(Math.random() * 200);
                    //Stiel
                    Landscape11.crc2.beginPath();
                    Landscape11.crc2.fillStyle = "#597459";
                    Landscape11.crc2.fillRect(_x - 2, _y + 10, 3, 50);
                    //Blatt
                    Landscape11.crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
                    Landscape11.crc2.fill();
                    //Blüten
                    Landscape11.crc2.beginPath();
                    Landscape11.crc2.fillStyle = "#D3B8CE";
                    Landscape11.crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";
                    Landscape11.crc2.moveTo(_x, _y);
                    Landscape11.crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                    Landscape11.crc2.fill();
                }
            }
        }
    }
    Landscape11.Flower = Flower;
})(Landscape11 || (Landscape11 = {}));
//# sourceMappingURL=flower.js.map