namespace Aufgabe3 {

    //Variablen deklarieren
    let cardPair: number;
    let cardCont: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardsArray: HTMLElement[] = [];
    let openCards: number = 0;
    let openCardsArray: HTMLElement[] = [];
    let check: HTMLElement[] = [];

    let formData: FormData;
    let size: number;
    let backgroundColor: FormDataEntryValue | null; 
    let cardColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    // Memory wird gestartet
    window.addEventListener("load", startMemory);

    function startMemory(): void {
        let start: HTMLElement = <HTMLElement>document.querySelector(".start");
        start.addEventListener("click", main);
    }

    //Karte wird erstellt   
    function createCard(_cardCont: string): void {
        let card: HTMLElement = document.createElement("div");

        card.innerHTML = "<p>" + _cardCont + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");

        cardsArray.push(card);
        check.push(card);
        card.addEventListener("click", turnCard);

        // Cardsize response
        card.style.width = size + "px";
        card.style.height = size + "px";

        // Backgroundcolor response (
        if (backgroundColor) { 
            card.style.backgroundColor = backgroundColor.toString();
        }
        
        // Frontsideolor response
        if (cardColor) { 
            card.style.background = cardColor.toString();
        }

        // Fontcolor response
        if (fontColor) { 
            card.style.color = fontColor.toString();
        }

        // Fontstyle response
        if (fontStyle) { 
            card.style.fontFamily = fontStyle.toString();
        }

    }

    function turnCard(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            openCards++;
            if (!(openCards > 2) && target.classList.contains("hidden") && target != openCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("nothidden");
                    openCardsArray.push(target);
                }
            } else {
                openCards--;
            }
            if (openCards == 2) {
                setTimeout(checkCards, 1500);
            }
        }
    }
    // Aufgedeckte Karten werden miteinander verglichen
    function checkCards(): void {
        if (openCardsArray[0].innerHTML == openCardsArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                openCardsArray[i].classList.remove("nothidden");
                openCardsArray[i].classList.add("taken");
            }
            check.splice(0, 2);
        } else {
            for (let i: number = 0; i < openCardsArray.length; i++) {
                openCardsArray[i].classList.remove("nothidden");
                openCardsArray[i].classList.add("hidden");
            }
        }
        openCardsArray = [];
        openCards = 0;
        timeOfWin();
    }

    function timeOfWin(): void {
        if (check.length == 0) {
            alert("Glückwunsch, du hast alle Paare innerhalb von ... Sekunden gefunden!");
        }
    }

    //Karten werden in Array gesammelt
    function mixCards(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    // Main Funktion 
    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }

        formData = new FormData(document.forms[0]); 
        console.log(formData);
        

        size = Number(formData.get("Slider")); 
        backgroundColor = formData.get("Backgroundcolor"); 
        cardColor = formData.get("CardColor"); 
        fontColor = formData.get("FontColor"); 
        fontStyle = formData.get("RadioGroupButton"); 

        // Stepper response
        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        cardPair = Number(pairOfCards);
        }
        else {
            cardPair = 5;
        }

        // Karte wird erstellt
        for (let i: number = 0; i < cardPair; i++) {
            createCard(cardCont[i]);
            createCard(cardCont[i]);
        }

  
        mixCards(cardsArray);

        for (let i: number = 0; i < cardsArray.length; i++) {
            let container: HTMLDivElement = <HTMLDivElement>document.getElementById("container");
            container.appendChild(cardsArray[i]);
        }
    }
}