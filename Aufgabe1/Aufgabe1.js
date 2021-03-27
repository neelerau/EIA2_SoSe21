"use strict";
var randomPoem;
(function (randomPoem) {
    //Arrays mit den einzelnen Satzteilen
    let name = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore", "Snape"];
    let action = ["liebt", "braut", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //leeres String, in welches die Satzteile angeordnet werden
    let sentence = " ";
    //console.log(name[], action[], object[]);
    //Forschleife, welche die Laufvariable anhand der Länge des Arrays rückwärts durchzählt
    for (let index = 6; index <= object.length; index--) {
        if (index == 0) {
            break;
        }
        //console.log(index);
        getVerse(name, action, object, sentence);
    }
    //In der Funktion werden die Werte zurückgegeben, Name als Präfix mit Unterstrick
    function getVerse(_name, _action, _object, _sentence) {
        //console.log("alohomara");
        //Math.floor, rundet die Nachkommastelle auf
        let randomName = Math.floor(Math.random() * _name.length); //Mit Math.random wird eine zufällioge Zahl erzeugt
        _sentence += _name.splice(randomName, 1) + " "; //Mit splice wird ein Wort aus dem Array gezogen und in den Satz eingefügt
        let randomAction = Math.floor(Math.random() * _action.length);
        _sentence += _action.splice(randomAction, 1) + " ";
        let randomObject = Math.floor(Math.random() * _object.length);
        _sentence += _object.splice(randomObject, 1) + " ";
        console.log(_sentence);
        return _sentence;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=Aufgabe1.js.map