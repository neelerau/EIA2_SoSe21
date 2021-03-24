namespace randomPoem {
    let name: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Dumbledore", "Snape"];
    let action: string [] = ["liebt", "braut", "studiert", "hasst", "zaubert", "zerstört"];
    let object: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let sentence: string = "";

    for (let index: number = 6; index <= object.length; index--) {
        if (index == 0) {
            break;
        }
        getVerse(name, action, object, sentence);
    }

    function getVerse (_name: string[], _action: string[], _object: string[], _sentence: string): string {

    let randomName: number = Math.floor(Math.random() * _name.length);
    _sentence += _name.splice(randomName, 1) + "";

    let randomAction: number = Math.floor(Math.random() * _action.length);
    _sentence += _action.splice(randomAction, 1) + "";

    let randomObject: number = Math.floor(Math.random() * _object.length);
    _sentence += _object.splice(randomObject, 1) + "";

    console.log(_sentence);
    return _sentence;
    }
 }
