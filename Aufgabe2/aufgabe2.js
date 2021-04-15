"use strict";
var L02;
(function (L02) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        var span = document.querySelector("span");
        let position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "  x-Koordiante " + x + "px" + " , " + "y-Koordinate " + y + "px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type);
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=aufgabe2.js.map