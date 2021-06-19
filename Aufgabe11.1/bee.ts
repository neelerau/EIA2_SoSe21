namespace Landscape11 {

    export class Bee extends Moveable {
        protected position: Vector;
        protected velocity: Vector;


        constructor (_position?: Vector) { 
            super(_position);
            

            if (_position) 
                this.position = _position; 
            else
                this.position = new Vector(750, 470); 
                

            this.velocity = new Vector(1000, 0); 
            this.velocity = Vector.random(150, 50);
        }

        public draw(): void {
            let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#canvas");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
            crc2.save();
            
            crc2.beginPath();
            crc2.fillStyle = "#E5CC8A";
            crc2.ellipse(this.position.x , this.position.y , 15, 20, Math.PI / 2, 0, 2 * Math.PI);
     
            crc2.fill();
            crc2.closePath();
     
            //Streifen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.ellipse(this.position.x + 5, this.position.y , 13, 8, Math.PI / 2, 0, 1 * Math.PI);
     
            crc2.fill();
            crc2.closePath(); 
     
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.ellipse(this.position.x - 8 , this.position.y , 13, 8, Math.PI / 2, 0, 1 * Math.PI);
     
            crc2.fill();
            crc2.closePath(); 
            
      
            
            //Auge
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x + 12, this.position.y - 5, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
      
     
            //Flügel Biene
            crc2.beginPath();
            crc2.fillStyle = "#D0E5E5";
            crc2.ellipse(this.position.x - 10, this.position.y + -20, 10, 15, Math.PI / -5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
     
            crc2.beginPath();
            crc2.fillStyle = "#D0E5E5";
            crc2.ellipse(this.position.x - 3, this.position.y + -20, 10, 15, Math.PI / -5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
     
     
                // Stachel Biene
            crc2.beginPath();
            crc2.fillStyle = "darkgrey";
            crc2.moveTo(this.position.x - 20 , this.position.y );
            crc2.lineTo(this.position.x - 20, this.position.y + 6);
            crc2.lineTo(this.position.x - 30, this.position.y + 3);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}