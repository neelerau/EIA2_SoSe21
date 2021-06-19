//Zusammenarbeit mit Alessia Carbone und Aileen Akin

namespace Landscape11 { 

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let imageData: ImageData;
    let flowerArray: Flower[] = []; 
    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")!;

        drawField(1, 1);
        drawSky(1, 1, "");

        createClouds();
        window.setInterval(update, 50);

        drawMountain(1, 1, "");

        createFlower();
        drawFlower();
        drawBeehouse()

        drawTrees(1, 1, "", "");
        drawSun(1, 1, "#F2CAA7");

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(10);

        nectarAmount();
        window.setInterval(nectarAmount, 200);

    }

    function update(): void {
        crc2.clearRect(0, 0, 1000, 750);
        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }

    function createBee(_amound: number): void {
        for (let i: number = 0; i < 10; i++) {
            let bee: Moveable = new Bee();
            moveables.push(bee);
        }
    }


    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Moveable = new Cloud(0.5);
            moveables.push(cloud);                
        }
    }

    function createFlower(): void {
        for (let i: number = 0; i < 10; i++) {
            let flower: Flower = new Flower();
            flowerArray.push(flower);
        }
        for (let i: number = 0; i < 10; i++) {
            let flower2: Flower = new Flower();
            flowerArray.push(flower2);
        }
    }
    function drawFlower(): void {
        for (let flower of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            flower.drawFlower1(randomX + 150, randomY + 400);
        }
        for (let flower2 of flowerArray) {
            let randomX: number = Math.floor(Math.random() * 900);
            let randomY: number = Math.floor(Math.random() * 200);
            flower2.drawFlower2(randomX + 150, randomY + 500);
        }
    }


    function drawSky(_x: number, _y: number, _strokeColor: string): void {
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
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

    function drawField(_x: number, _y: number): void {
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#A9B5AB");
        gradient.addColorStop(0.6, "#7E9582");

        crc2.beginPath();
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y + 360);
        crc2.lineTo(_x + 1270, _y + 360);
        crc2.lineTo(_x + 1270, _y + 900);
        crc2.lineTo(_x - 1270, _y + 900);

        crc2.closePath();
        crc2.fill();
    }

    function drawSun(_x: number, _y: number, _fillColor: string): void {
        //Sonne
        crc2.beginPath();
        crc2.fillStyle = _fillColor;


        crc2.arc(450, _y, 100, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawMountain(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        //Farbverlauf Berge
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#FFFFFF");
        gradient.addColorStop(0.8, "#86817B");

        crc2.fillStyle = gradient;
        //Berg1
        crc2.beginPath();
        crc2.moveTo(500, 400);
        crc2.quadraticCurveTo(100, 10, -200, 400);
        crc2.moveTo(500, 55);
        crc2.quadraticCurveTo(50, 0, -20, -10);
        crc2.fill();

        //Berg2
        crc2.beginPath();
        crc2.moveTo(1000, 400);
        crc2.quadraticCurveTo(850, 50, -200, 400);
        crc2.fill();

        //Berg3
        crc2.beginPath();
        crc2.moveTo(1280, 400);
        crc2.quadraticCurveTo(1050, 10, 600, 400);
        crc2.fill();
    }

    function drawTrees(_x: number, _y: number, _fillColor: string, _strokeColor: string): void {
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

    function drawBeehouse(): void {
        //Haus
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(750, 460, 50, 65, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = "#da9759";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //streifen
        crc2.beginPath();
        crc2.moveTo(710, 420);
        crc2.lineTo(790, 420);
        crc2.moveTo(700, 450);
        crc2.lineTo(800, 450);
        crc2.moveTo(700, 470);
        crc2.lineTo(800, 470);
        crc2.moveTo(710, 500);
        crc2.lineTo(790, 500);
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
        //tür
        crc2.beginPath();
        crc2.arc(750, 470, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        //türschatten
        crc2.beginPath();
        crc2.arc(750, 470, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#663300";
        crc2.fill();
        crc2.closePath();
    }

    let i: number = 0;
    function nectarAmount(): void {
        if (i == 0) {
            i = 1;
            let bar: HTMLElement = <HTMLElement>document.querySelector("#bar");
            let width: number = 1;
            let percent: number  = setInterval(frame, 150);
            
            function frame(): void {
                if (width >= 100) {
                    clearInterval(percent);
                    i = 100;
                } else {
                    width++;
                    bar.style.width = width + "%";
                    bar.innerHTML = width + "%";
                }
            }
        }
    }

}