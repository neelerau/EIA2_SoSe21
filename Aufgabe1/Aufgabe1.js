"use strict";
var randomPoem;
(function (randomPoem) {
    let name = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore", "Snape"];
    let action = ["liebt", "braut", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let sentence = "";
    for (let index = 6; index <= object.length; index--) {
        if (index == 0) {
            break;
        }
        getVerse(name, action, object, sentence);
    }
    function getVerse(_name, _action, _object, _sentence) {
        let randomName = Math.floor(Math.random() * _name.length);
        _sentence += _name.splice(randomName, 1) + "";
        let randomAction = Math.floor(Math.random() * _action.length);
        _sentence += _action.splice(randomAction, 1) + "";
        let randomObject = Math.floor(Math.random() * _object.length);
        _sentence += _object.splice(randomObject, 1) + "";
        console.log(_sentence);
        return _sentence;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=Aufgabe1.js.map