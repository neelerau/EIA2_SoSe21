"use strict";
var LandscapeClasses;
(function (LandscapeClasses) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLenght, _maxLenght) {
            let length = _minLenght + Math.random() * (_maxLenght - _minLenght);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    LandscapeClasses.Vector = Vector;
})(LandscapeClasses || (LandscapeClasses = {}));
//# sourceMappingURL=vektor.js.map