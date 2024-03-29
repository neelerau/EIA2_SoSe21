"use strict";
//Zusammenarbeit mit Alessia Carbone und Aileen Akin
var Landscape11;
(function (Landscape11) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let flowerArray = [];
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Landscape11.crc2 = canvas.getContext("2d");
        drawField(1, 1);
        drawSky(1, 1, "");
        createClouds();
        window.setInterval(update, 50);
        drawMountain(1, 1, "");
        createFlower();
        drawFlower();
        drawBeehouse();
        drawTrees(1, 1, "", "");
        drawSun(1, 1, "#F2CAA7");
        imageData = Landscape11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(10);
        nectarAmount();
        window.setInterval(nectarAmount, 200);
    }
    function update() {
        Landscape11.crc2.clearRect(0, 0, 1000, 750);
        Landscape11.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBee(_amound) {
        for (let i = 0; i < 10; i++) {
            let bee = new Landscape11.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new Landscape11.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createFlower() {
        for (let i = 0; i < 10; i++) {
            let flower = new Landscape11.Flower();
            flowerArray.push(flower);
        }
        for (let i = 0; i < 10; i++) {
            let flower2 = new Landscape11.Flower();
            flowerArray.push(flower2);
        }
    }
    function drawFlower() {
        for (let flower of flowerArray) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            flower.drawFlower1(randomX + 150, randomY + 400);
        }
        for (let flower2 of flowerArray) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            flower2.drawFlower2(randomX + 150, randomY + 500);
        }
    }
    function drawSky(_x, _y, _strokeColor) {
        var gradient = Landscape11.crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#F5D3E0");
        gradient.addColorStop(1, "#D1862E");
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = gradient;
        Landscape11.crc2.moveTo(_x, _y);
        Landscape11.crc2.lineTo(_x + 1280, _y);
        Landscape11.crc2.lineTo(_x + 1280, _y + 360);
        Landscape11.crc2.lineTo(_x - 1280, _y + 360);
        Landscape11.crc2.closePath();
        Landscape11.crc2.fill();
    }
    function drawField(_x, _y) {
        var gradient = Landscape11.crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#A9B5AB");
        gradient.addColorStop(0.6, "#7E9582");
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = gradient;
        Landscape11.crc2.moveTo(_x, _y + 360);
        Landscape11.crc2.lineTo(_x + 1270, _y + 360);
        Landscape11.crc2.lineTo(_x + 1270, _y + 900);
        Landscape11.crc2.lineTo(_x - 1270, _y + 900);
        Landscape11.crc2.closePath();
        Landscape11.crc2.fill();
    }
    function drawSun(_x, _y, _fillColor) {
        //Sonne
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = _fillColor;
        Landscape11.crc2.arc(450, _y, 100, 0, 5 * Math.PI);
        Landscape11.crc2.fill();
        Landscape11.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = _fillColor;
        //Farbverlauf Berge
        var gradient = Landscape11.crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(0.8, "#86817B");
        Landscape11.crc2.fillStyle = gradient;
        //Berg1
        Landscape11.crc2.beginPath();
        Landscape11.crc2.moveTo(500, 400);
        Landscape11.crc2.quadraticCurveTo(100, 10, -200, 400);
        Landscape11.crc2.moveTo(500, 55);
        Landscape11.crc2.quadraticCurveTo(50, 0, -20, -10);
        Landscape11.crc2.fill();
        //Berg2
        Landscape11.crc2.beginPath();
        Landscape11.crc2.moveTo(1000, 400);
        Landscape11.crc2.quadraticCurveTo(850, 50, -200, 400);
        Landscape11.crc2.fill();
        //Berg3
        Landscape11.crc2.beginPath();
        Landscape11.crc2.moveTo(1280, 400);
        Landscape11.crc2.quadraticCurveTo(1050, 10, 600, 400);
        Landscape11.crc2.fill();
    }
    function drawTrees(_x, _y, _fillColor, _strokeColor) {
        //Baumstamm1
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#8C6046";
        Landscape11.crc2.fillRect(800, 335, 25, 110);
        //Baumkrone1
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#597459";
        Landscape11.crc2.arc(780, 255, 60, 0, 2 * Math.PI);
        Landscape11.crc2.arc(850, 285, 55, 0, 2 * Math.PI);
        Landscape11.crc2.arc(780, 315, 35, 0, 2 * Math.PI);
        Landscape11.crc2.arc(790, 305, 55, 0, 2 * Math.PI);
        Landscape11.crc2.arc(785, 245, 75, 0, 2 * Math.PI);
        Landscape11.crc2.closePath();
        Landscape11.crc2.fill();
        //Baumstamm2
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#8C6046";
        Landscape11.crc2.fillRect(200, 325, 25, 110);
        //Baumkrone2
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#3A583A";
        Landscape11.crc2.arc(240, 310, 60, 0, 2 * Math.PI);
        Landscape11.crc2.arc(190, 315, 35, 0, 2 * Math.PI);
        Landscape11.crc2.arc(180, 300, 50, 0, 2 * Math.PI);
        Landscape11.crc2.arc(215, 250, 50, 0, 2 * Math.PI);
        Landscape11.crc2.closePath();
        Landscape11.crc2.fill();
        //Baumstamm3
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#8C6046";
        Landscape11.crc2.fillRect(1080, 335, 25, 110);
        //Baumkrone3
        Landscape11.crc2.beginPath();
        Landscape11.crc2.fillStyle = "#3A583A";
        Landscape11.crc2.arc(1140, 285, 55, 0, 2 * Math.PI);
        Landscape11.crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        Landscape11.crc2.arc(1065, 305, 55, 0, 2 * Math.PI);
        Landscape11.crc2.arc(1090, 265, 75, 0, 2 * Math.PI);
        Landscape11.crc2.closePath();
        Landscape11.crc2.fill();
    }
    function drawBeehouse() {
        //Haus
        Landscape11.crc2.save();
        Landscape11.crc2.beginPath();
        Landscape11.crc2.ellipse(750, 460, 50, 65, Math.PI / 1, 0, 2 * Math.PI);
        Landscape11.crc2.fillStyle = "#da9759";
        Landscape11.crc2.strokeStyle = "brown";
        Landscape11.crc2.lineWidth = 5;
        Landscape11.crc2.stroke();
        Landscape11.crc2.fill();
        Landscape11.crc2.closePath();
        //streifen
        Landscape11.crc2.beginPath();
        Landscape11.crc2.moveTo(710, 420);
        Landscape11.crc2.lineTo(790, 420);
        Landscape11.crc2.moveTo(700, 450);
        Landscape11.crc2.lineTo(800, 450);
        Landscape11.crc2.moveTo(700, 470);
        Landscape11.crc2.lineTo(800, 470);
        Landscape11.crc2.moveTo(710, 500);
        Landscape11.crc2.lineTo(790, 500);
        Landscape11.crc2.strokeStyle = "brown";
        Landscape11.crc2.lineWidth = 3;
        Landscape11.crc2.stroke();
        Landscape11.crc2.closePath();
        //tür
        Landscape11.crc2.beginPath();
        Landscape11.crc2.arc(750, 470, 15, 0, 2 * Math.PI);
        Landscape11.crc2.fillStyle = "brown";
        Landscape11.crc2.fill();
        Landscape11.crc2.closePath();
        //türschatten
        Landscape11.crc2.beginPath();
        Landscape11.crc2.arc(750, 470, 10, 0, 2 * Math.PI);
        Landscape11.crc2.fillStyle = "#663300";
        Landscape11.crc2.fill();
        Landscape11.crc2.closePath();
    }
    let i = 0;
    function nectarAmount() {
        if (i == 0) {
            i = 1;
            let bar = document.querySelector("#bar");
            let width = 1;
            let percent = setInterval(frame, 150);
            function frame() {
                if (width >= 100) {
                    clearInterval(percent);
                    i = 100;
                }
                else {
                    width++;
                    bar.style.width = width + "%";
                    bar.innerHTML = width + "%";
                }
            }
        }
    }
})(Landscape11 || (Landscape11 = {}));
//# sourceMappingURL=main.js.map