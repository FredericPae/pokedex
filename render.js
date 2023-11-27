// Render Pokedex

function renderPokemon() {
    for (let j = 0; j < names.length; j++) {
        renderSmallCard(j); // find function in "render.js"
        addBackgrounColor(j); // Nach dem rendern der Karte wird der Wert "j" an die Funktion addBackgroundColor übergeben, um jeder Karte einen spezifischen Hintergrund zu geben

        if (specialElement_2[j] == null) {
            document.getElementById(`specialty2_${j}`).classList.add('d-none');
        }
    }
}

function addBackgrounColor(j) {
    let currentSpecialty = document.getElementById(`specialty1_${j}`).innerHTML; // Diese Variable holt sich den Wert ('Text')

    for(let i = 0; i < allTypes.length; i++) { // Diese For-Schleife iteriert durch das Array "allTypes"
        if (currentSpecialty === allTypes[i]) { // Diese Bedingung überprüft, ob der Wert der Variable mit dem des Arrays übereinstimmt
            document.getElementById(`pokedex_${j}`).classList.add(`pdx_bg_color_${[i]}`); // Sobald die Bedingung erfüllt ist, wird die gewünschte Classe an das gewünschte Element übertragen
        }
    }
}

// Show Card function (open and close)

function cardWindow(j, action) {
    if(action === 'show') {
        showOrCoseCardWindow(true);
        renderPokemonCard(j);
        renderAbout(j);
        displayNoneValueOfNull(j);
        addCardBackgrounColor(j);
        displayNoneValueOfNull(j);
        contollLibrary(j, false);
        } else if (action === 'close') { // Schließt die Karte und das Hauptmenüfenster "Library"
            showOrCoseCardWindow(false);
            openLibrary(false);
        }
}

function showOrCoseCardWindow(isOpen) { // Boolescherparameter, der "true" oder "false"  
    const action = isOpen ? 'remove' : 'add'; // definiert eine Variable, die den Boolescherparameter auf "true" und "false". Anschließend folgt eine "if-else" Abfrage, die bei "true" den Wert "remove" oder bei "false" den Wert "add" einnimmt.
    document.getElementById("mainInfoBox").classList[action]("d-none"); // [action] stellt den eingenommenen Wert der Variable da und ermöglicht es, die Methode "classList" dynamisch darzustellen. 
    document.getElementById('infoCardContainer').classList[action]('d-none');
    document.getElementById('body').classList[isOpen ? 'add' : 'remove']('noScroll');
}

// Render current Pokemon Card

function addCardBackgrounColor(j) {
    currentSpeciality = document.getElementById(`specialty1_${j}`).innerHTML;

    for (let i = 0; i < allTypes.length; i++) {
        if (currentSpeciality === allTypes[i]) {
            document.getElementById(`currentPokemon${j}`).classList.add(`pdx_bg_color_${i}`);
        }
    }
}

function displayNoneValueOfNull(j) {
    if (specialElement_2[j] === null) {
        document.getElementById(`specialty2_container${j}`).classList.add('d-none');
    } 
    
    if (abilitie_2[j] === null) {
        document.getElementById(`ability_2${j}`).classList.add('d-none');
    }
    
    if (eggGroup_2[j] === null) {
        document.getElementById(`eggGroup_2${j}`).classList.add('d-none');
    }
}

// Control Library Function (Karten werden als "geliked" makiert)

function contollLibrary(j, isInLibrary) {
    let currentPokemon = document.getElementById(`infoCard${j}`);
    let currentId = currentPokemon.id; // holt sich die ID aus dem aktuellen DOM

    for (let i = 0; i < myLibrary.length; i++) {
        let currentArray = myLibrary[i];
        if(currentArray.id === currentId) { // currentArray.id holt sich die ID des DOM aus dem jeweiligen Array 
            document.getElementById(`likeButton${j}`).classList[isInLibrary ? 'remove' : 'add']('d-none');
            document.getElementById(`activLikeButton${j}`).classList[isInLibrary ? 'add' : 'remove']('d-none');
        }
    }
}

// Like Button Function

function addToLibrary(j, isInLibrary) {
    document.getElementById(`likeButton${j}`).classList[isInLibrary ? 'add' : 'remove']('d-none');
    document.getElementById(`activLikeButton${j}`).classList[isInLibrary ? 'remove' : 'add']('d-none');

    let currentPokemon = document.getElementById(`infoCard${j}`);
    let currentId = currentPokemon.id;

    if (isInLibrary === true) {
        myLibrary.push(currentPokemon);
    } else {
        findAndDeleteCard(currentId);
    }
}

function findAndDeleteCard(currentId) {
    for(let i = 0; i < myLibrary.length; i++) { // Iteriert das gesammte Array durch, bis die passende Karte gefunden wurde, die gelöscht werden soll
        if(myLibrary[i].id === currentId) {
            myLibrary.splice(i, 1);
            break; // Stoppt die For-Schleife, sobald die Bedingung erfüllt wurde
        }
    }
}

// Diashow Function

function goForward(j) {
    j++;
    if(j === amountOfPokemon.length) {
        cardWindow(j, 'close');
    } else {
        cardWindow(j, 'show');
    }
}

function goBack(j) {
    if(j <= 0) {
        cardWindow(j, 'close');
    } else {
        j--;
        cardWindow(j, 'show');
    }
}

// Comming soon

function closeCommingSoon() {
    location.reload();
}