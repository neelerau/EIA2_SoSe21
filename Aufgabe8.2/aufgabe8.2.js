"use strict";
//In Zusammenarbeit mit Alessia Carbone und inspiriert von Mona Stingls Code nach Nachfrage
var landscape;
(function (landscape) {
    window.addEventListener("load", startLandscape);
    let crc2;
    let canvas;
    //Funktion, damit Landscape startet
    function startLandscape(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky(0, 0, "#D37857");
        drawMountain(500, 310, "#a9a9a9");
        drawMeadow(0, 0);
        drawSun(599, 120, "#F2CAA7");
        drawCloud(50, 120, "#D3EDE5");
        drawCloud(680, 200, "#D3EDE5");
        drawCloud(530, 100, "#D3EDE5");
        drawCloud(250, 30, "#D3EDE5");
        drawCloud(870, 80, "#D3EDE5");
        drawCloud(1100, 130, "#D3EDE5");
        drawTree(750, 300);
        //Blumen werden bei reload neu und mehrfachangeordnet
        for (var height = 400; height < 700; height += 2) {
            var randomFlower = Math.floor((Math.random() * 3));
            var width = Math.floor((Math.random() * 1200) + 30);
            switch (randomFlower) {
                case 0:
                    drawFlowerBlue(width, height);
                    break;
                case 1:
                    drawFlowerRosa(width, height);
                    break;
                case 2:
                    drawFlowerPurpil(width, height);
                    break;
            }
        }
    }
    //Funktion Himmel
    function drawSky(_x, _y, _strokeColor) {
        var gradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#F5D3E0");
        gradient.addColorStop(1, "#D1862E");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 360);
        crc2.lineTo(_x - 1280, _y + 360);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion Wiese
    function drawMeadow(_x, _y) {
        var gradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#A9B5AB");
        gradient.addColorStop(0.6, "#7E9582");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y + 360);
        crc2.lineTo(_x + 1270, _y + 360);
        crc2.lineTo(_x + 1270, _y + 720);
        crc2.lineTo(_x - 1270, _y + 720);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion Berge
    function drawMountain(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        //Farbverlauf Berge
        var gradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(0.8, "#86817B");
        crc2.fillStyle = gradient;
        //Berg1
        crc2.beginPath();
        crc2.moveTo(500, 500);
        crc2.quadraticCurveTo(100, 10, -200, 400);
        crc2.moveTo(500, 55);
        crc2.quadraticCurveTo(50, 0, -20, -10);
        crc2.fill();
        //Berg2
        crc2.beginPath();
        crc2.moveTo(1000, 500);
        crc2.quadraticCurveTo(850, 50, -200, 600);
        crc2.fill();
        //Berg3
        crc2.beginPath();
        crc2.moveTo(1280, 400);
        crc2.quadraticCurveTo(1050, 10, 600, 750);
        crc2.fill();
    }
    //Funktion Sonne
    function drawSun(_x, _y, _fillColor) {
        //Sonne
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(450, _y, 100, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    // Funktion Baum
    function drawTree(_x, _y) {
        //Baumstamm1
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";
        crc2.fillRect(800, 335, 25, 110);
        //Baumkrone1
        crc2.beginPath();
        crc2.fillStyle = "#597459";
        crc2.arc(780, 255, 60, 0, 2 * Math.PI);
        crc2.arc(850, 285, 55, 0, 2 * Math.PI);
        crc2.arc(780, 315, 35, 0, 2 * Math.PI);
        crc2.arc(790, 305, 55, 0, 2 * Math.PI);
        crc2.arc(785, 245, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Baumstamm2
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";
        crc2.fillRect(200, 325, 25, 110);
        //Baumkrone2
        crc2.beginPath();
        crc2.fillStyle = "#3A583A";
        crc2.arc(240, 310, 60, 0, 2 * Math.PI);
        crc2.arc(190, 315, 35, 0, 2 * Math.PI);
        crc2.arc(180, 300, 50, 0, 2 * Math.PI);
        crc2.arc(215, 250, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Baumstamm3
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";
        crc2.fillRect(1080, 335, 25, 110);
        //Baumkrone3
        crc2.beginPath();
        crc2.fillStyle = "#3A583A";
        crc2.arc(1140, 285, 55, 0, 2 * Math.PI);
        crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 305, 55, 0, 2 * Math.PI);
        crc2.arc(1090, 265, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion Wolke
    function drawCloud(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 10, _y + 30, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 30, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion rosane Blume
    function drawFlowerRosa(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x - 2, _y + 10, 3, 50); // Dritter Wert = Breite Stiel, vierter Wert = Länge
        //Blatt
        crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#D3B8CE";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Funktion blau Blume
    function drawFlowerBlue(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x - 2, _y + 10, 4, 50);
        //Blatt
        crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#6F9AAD";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    // Funktion lilane Blume
    function drawFlowerPurpil(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x + 0, _y + 10, 3, 40);
        //Blatt
        crc2.arc(_x + 5, _y + 20, 20, 0, -4.5);
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#785286";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
})(landscape || (landscape = {}));
//# sourceMappingURL=aufgabe8.2.js.map