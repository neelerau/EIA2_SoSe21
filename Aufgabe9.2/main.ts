//Zusammenarbeit mit Alessia Carbone und inspiriert bei Lukas Muschal

namespace LandscapeClasses {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let letters: string = "";
    let color: string = "";
    let beeArray: Bienen[] = [];


    let cloudArray: Cloud[] = [];
    let xCloudArray: number[] = [];
    let yCloudArray: number[] = [];
    let cloudSize: Vector = new Vector(10, 5);


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        createCloud();
        createCloudxy(20, cloudSize);
        createBees(15);


        function getRandomColor(): string {
            letters = "0123456789ABCDEF";
            color = "#";
            for (let i: number = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
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



        function drawFlower1(_x: number, _y: number): void {


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


        function drawFlower2(_x: number, _y: number): void {

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

        function drawFlower3(_x: number, _y: number): void {

            
            //Stiel
            crc2.beginPath();

            crc2.fillStyle = "#556B2F";

            crc2.fillRect(_x - 2, _y + 10, 3, 50);

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


        function createCloudxy(_particleNumber: number, _size: Vector): void {
            for (let i: number = 0; i < _particleNumber; i++) {
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);

                xCloudArray.push(x);
                yCloudArray.push(y);
            }
        }
        function createCloud(): void {
            let xCloud: number = 0;
            let yCloud: number = 150;
            let cloudPosition: Vector = new Vector(xCloud, yCloud);
            let cloudSize: Vector = new Vector(100, 50);
            let velocityCloud: Vector = new Vector(4, 0);

            for (let i: number = 0; i < 20; i++) {
                let cloud: Cloud = new Cloud(cloudPosition, cloudSize, velocityCloud, xCloudArray[i], yCloudArray[i]);

                cloud.drawCloud();
                cloudArray.push(cloud);
            }

        }

        function createBees(_nBees: number): void {

            for (let i: number = 0; i < _nBees; i++) {
                let randomXBee: number = Math.random() * (crc2.canvas.width);
                let randomYBee: number = Math.random() * (crc2.canvas.height);
                let beePosition: Vector = new Vector(randomXBee, randomYBee);
                let beeVelocity: Vector = new Vector(20, 0);
                let bee: Bienen = new Bienen(beePosition, beeVelocity);
                beeArray.push(bee);

            }
        }


        function update(): void {
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


            crc2.save();
            drawSky(0, 0, "");
            crc2.restore();
            crc2.save();
            getRandomColor();
            crc2.restore();
            crc2.save();
            crc2.restore();
            crc2.save();
            drawField(0, 0);
            crc2.restore();
            crc2.save();
            drawSun(180, 100, "");
            crc2.restore();

            crc2.save();
            drawMountain(0, 350, "");
            crc2.restore();
            crc2.save();
            drawTrees(0, 350, "", "");
            crc2.restore();
            crc2.save();
            drawFlower1(800, 600);
            drawFlower2(600, 600);
            drawFlower3(700, 600);



            for (var height: number = 450; height < 700; height += 1) {

                var randomFlower: number = Math.floor((Math.random() * 3));
                var width: number = Math.floor((Math.random() * 1500));

                switch (randomFlower) {
                    case 0:
                        drawFlower1(width, height);
                        break;
                    case 1:
                        drawFlower2(width, height);
                        break;
                    case 2:
                        drawFlower3(width, height);
                        break;
                }
            }

            for (let bee of beeArray) {
                bee.move(1 / 30);
                bee.drawBees(0, 0);

            }
            for (let i: number = 0; i < 20; i++) {
                cloudArray[i].drawCloud();
                cloudArray[i].move(1 / 50);
            }

        }
        window.setInterval(update, 150);

    }
}