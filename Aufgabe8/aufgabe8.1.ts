namespace Canvas_A8 {

    window.addEventListener("load", startCanvas);
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let crc4: CanvasRenderingContext2D;

    function startCanvas(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector(".canvas")!;
        crc2 = canvas.getContext("2d")!;
        crc3 = canvas.getContext("2d")!;
        crc4 = canvas.getContext("2d")!;

        console.log(crc2);

        circle();
        triangle();
        square();
    }


    function circle(): void {
        for (let index: number = 0; index < 20; index++) {

            let greenCircle: number = Math.floor(Math.random() * 350);
            let blueCircle: number = Math.floor(Math.random() * 350);
            let redCircle: number = Math.floor(Math.random() * 350);

            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (500) + 1), (Math.random() * (500) + 1), (Math.random() * (90) + 1), 0, 5 + Math.PI);

            crc2.fillStyle = "rgb( " + greenCircle + ", " + blueCircle + ", " + redCircle + ")";
            crc2.fill();

            crc2.closePath();
            crc2.stroke();


        }

    }

    function triangle(): void {
        for (let index: number = 0; index < 10; index++) {

            let greenTriangle: number = Math.floor(Math.random() * 200);
            let blueTriangle: number = Math.floor(Math.random() * 200);
            let redTriangle: number = Math.floor(Math.random() * 200);

            crc3.beginPath();

            crc3.moveTo(Math.floor(Math.random() * (400) + 1), Math.floor(Math.random() * (400) + 1));
            crc3.lineTo(Math.floor(Math.random() * (400) + 1), Math.floor(Math.random() * (400) + 1));
            crc3.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (350) + 1));

            crc3.fillStyle = "rgb( " + greenTriangle + ", " + blueTriangle + ", " + redTriangle + ")";
            crc3.fill();

            crc3.closePath();
            crc3.stroke();

        }

    }

    function square(): void {
        for (let index: number = 0; index < 10; index++) {

            let greenTriangle: number = Math.floor(Math.random() * 200);
            let blueTriangle: number = Math.floor(Math.random() * 200);
            let redTriangle: number = Math.floor(Math.random() * 200);

            crc4.beginPath();

            crc4.moveTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (500) + 1));
            crc4.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (500) + 1));
            crc4.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (350) + 1));
            crc4.lineTo(Math.floor(Math.random() * (200) + 1), Math.floor(Math.random() * (400) + 1));

            crc4.fillStyle = "rgb( " + greenTriangle + ", " + blueTriangle + ", " + redTriangle + ")";
            crc4.fill();

            crc4.closePath();
            crc4.stroke();

        }


    }

    let newCanvas: HTMLElement = <HTMLElement>document.querySelector(".reloadButton");

    newCanvas.addEventListener("click", function (): void {
        location.reload();
    });




}