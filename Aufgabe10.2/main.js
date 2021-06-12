"use strict";
var LandscapePolymorphie;
(function (LandscapePolymorphie) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let flowerArray = [];
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        LandscapePolymorphie.crc2 = canvas.getContext("2d");
        drawField(1, 1);
        drawSky(1, 1, "");
        createClouds();
        window.setInterval(update, 50);
        drawMountain(1, 1, "");
        createFlower();
        drawFlower();
        drawTrees(1, 1, "", "");
        drawSun(1, 1, "#F2CAA7");
        imageData = LandscapePolymorphie.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(10);
    }
    function update() {
        LandscapePolymorphie.crc2.clearRect(0, 0, 1000, 750);
        LandscapePolymorphie.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBee(_amound) {
        for (let i = 0; i < 10; i++) {
            let bee = new LandscapePolymorphie.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new LandscapePolymorphie.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createFlower() {
        for (let i = 0; i < 10; i++) {
            let flower = new LandscapePolymorphie.Flower();
            flowerArray.push(flower);
        }
        for (let i = 0; i < 10; i++) {
            let flower2 = new LandscapePolymorphie.Flower();
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
        var gradient = LandscapePolymorphie.crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#F5D3E0");
        gradient.addColorStop(1, "#D1862E");
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = gradient;
        LandscapePolymorphie.crc2.moveTo(_x, _y);
        LandscapePolymorphie.crc2.lineTo(_x + 1280, _y);
        LandscapePolymorphie.crc2.lineTo(_x + 1280, _y + 360);
        LandscapePolymorphie.crc2.lineTo(_x - 1280, _y + 360);
        LandscapePolymorphie.crc2.closePath();
        LandscapePolymorphie.crc2.fill();
    }
    function drawField(_x, _y) {
        var gradient = LandscapePolymorphie.crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#A9B5AB");
        gradient.addColorStop(0.6, "#7E9582");
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = gradient;
        LandscapePolymorphie.crc2.moveTo(_x, _y + 360);
        LandscapePolymorphie.crc2.lineTo(_x + 1270, _y + 360);
        LandscapePolymorphie.crc2.lineTo(_x + 1270, _y + 900);
        LandscapePolymorphie.crc2.lineTo(_x - 1270, _y + 900);
        LandscapePolymorphie.crc2.closePath();
        LandscapePolymorphie.crc2.fill();
    }
    function drawSun(_x, _y, _fillColor) {
        //Sonne
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = _fillColor;
        LandscapePolymorphie.crc2.arc(450, _y, 100, 0, 5 * Math.PI);
        LandscapePolymorphie.crc2.fill();
        LandscapePolymorphie.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = _fillColor;
        //Farbverlauf Berge
        var gradient = LandscapePolymorphie.crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(0.8, "#86817B");
        LandscapePolymorphie.crc2.fillStyle = gradient;
        //Berg1
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.moveTo(500, 400);
        LandscapePolymorphie.crc2.quadraticCurveTo(100, 10, -200, 400);
        LandscapePolymorphie.crc2.moveTo(500, 55);
        LandscapePolymorphie.crc2.quadraticCurveTo(50, 0, -20, -10);
        LandscapePolymorphie.crc2.fill();
        //Berg2
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.moveTo(1000, 400);
        LandscapePolymorphie.crc2.quadraticCurveTo(850, 50, -200, 400);
        LandscapePolymorphie.crc2.fill();
        //Berg3
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.moveTo(1280, 400);
        LandscapePolymorphie.crc2.quadraticCurveTo(1050, 10, 600, 400);
        LandscapePolymorphie.crc2.fill();
    }
    function drawTrees(_x, _y, _fillColor, _strokeColor) {
        //Baumstamm1
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#8C6046";
        LandscapePolymorphie.crc2.fillRect(800, 335, 25, 110);
        //Baumkrone1
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#597459";
        LandscapePolymorphie.crc2.arc(780, 255, 60, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(850, 285, 55, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(780, 315, 35, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(790, 305, 55, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(785, 245, 75, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.closePath();
        LandscapePolymorphie.crc2.fill();
        //Baumstamm2
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#8C6046";
        LandscapePolymorphie.crc2.fillRect(200, 325, 25, 110);
        //Baumkrone2
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#3A583A";
        LandscapePolymorphie.crc2.arc(240, 310, 60, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(190, 315, 35, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(180, 300, 50, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(215, 250, 50, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.closePath();
        LandscapePolymorphie.crc2.fill();
        //Baumstamm3
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#8C6046";
        LandscapePolymorphie.crc2.fillRect(1080, 335, 25, 110);
        //Baumkrone3
        LandscapePolymorphie.crc2.beginPath();
        LandscapePolymorphie.crc2.fillStyle = "#3A583A";
        LandscapePolymorphie.crc2.arc(1140, 285, 55, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(1065, 305, 55, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.arc(1090, 265, 75, 0, 2 * Math.PI);
        LandscapePolymorphie.crc2.closePath();
        LandscapePolymorphie.crc2.fill();
    }
})(LandscapePolymorphie || (LandscapePolymorphie = {}));
//# sourceMappingURL=main.js.map