namespace Landscape11 {

    export abstract class Moveable {
        protected position: Vector;
        protected velocity: Vector;
        protected size: number;

        constructor(_position?: Vector) { 
            if (_position) 
                this.position = _position; 
            else
                this.position = new Vector(750, 470); 
            this.velocity = new Vector(1000, 0); 
        }


        public draw(): void {
            // console.log("moveable Move");
        }

        public move(_timeslice: number): void { 
            
            let offset: Vector = this.velocity.copy(); 
            offset.scale(_timeslice); 
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.height)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;                
        }

    }

}