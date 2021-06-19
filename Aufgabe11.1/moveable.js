"use strict";
var Landscape11;
(function (Landscape11) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Landscape11.Vector(750, 470);
            this.velocity = new Landscape11.Vector(1000, 0);
        }
        draw() {
            // console.log("moveable Move");
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Landscape11.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Landscape11.crc2.canvas.height;
            if (this.position.x > Landscape11.crc2.canvas.height)
                this.position.x -= Landscape11.crc2.canvas.width;
            if (this.position.y > Landscape11.crc2.canvas.height)
                this.position.y -= Landscape11.crc2.canvas.height;
        }
    }
    Landscape11.Moveable = Moveable;
})(Landscape11 || (Landscape11 = {}));
//# sourceMappingURL=moveable.js.map