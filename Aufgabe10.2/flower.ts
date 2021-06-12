namespace LandscapePolymorphie {

    export class Flower {

        constructor(_position?: Vector) {
            //console.log("flower constructor");
        }

        drawFlower1(_x: number, _y: number): void {

                for (let index: number = 0; index < 7; index++) {
                let greenFlower: number = Math.floor(Math.random() * 100);
                let blueFlower: number = Math.floor(Math.random() * 100);
                let redFlower: number = Math.floor(Math.random() * 100);
        
            
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
                crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";

                crc2.moveTo(_x, _y);
                crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                crc2.fill();
        }

        }

       drawFlower2(_x: number, _y: number): void { 
            for (let index: number = 0; index < 5; index++) {

            for (let index: number = 0; index < 7; index++) {
                let greenFlower: number = Math.floor(Math.random() * 200);
                let blueFlower: number = Math.floor(Math.random() * 200);
                let redFlower: number = Math.floor(Math.random() * 200);
        
            
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
                crc2.fillStyle = "rgb( " + greenFlower + ", " + blueFlower + ", " + redFlower + ")";

                crc2.moveTo(_x, _y);
                crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
                crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
                crc2.arc(_x + 0, _y + 0, 7, 0, 2 * Math.PI);
                crc2.fill();
        }
        }
        }
    }
}
