"use strict";
var LandscapePolymorphie;
(function (LandscapePolymorphie) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new LandscapePolymorphie.Vector(750, 470);
            this.velocity = new LandscapePolymorphie.Vector(1000, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += LandscapePolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += LandscapePolymorphie.crc2.canvas.height;
            if (this.position.x > LandscapePolymorphie.crc2.canvas.height)
                this.position.x -= LandscapePolymorphie.crc2.canvas.width;
            if (this.position.y > LandscapePolymorphie.crc2.canvas.height)
                this.position.y -= LandscapePolymorphie.crc2.canvas.height;
        }
        draw() {
            // console.log("moveable Move");
        }
    }
    LandscapePolymorphie.Moveable = Moveable;
})(LandscapePolymorphie || (LandscapePolymorphie = {}));
//# sourceMappingURL=moveable.js.map