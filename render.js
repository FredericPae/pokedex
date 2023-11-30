// loading Screen

function loadingScreen(isLoading) {
    const action = isLoading ? 'remove' : 'add';
    document.getElementById('loadingScreen').classList[action]('d-none');
}

// Search Funktion

function search(e) {
    const items = document.querySelectorAll('#pokedex_container .pokedex');
    const searchTerm = e.target.value.trim().toLowerCase();

    items.forEach((item) => {
        const pokemonName = item.innerText.toLowerCase();
        if (!pokemonName.startsWith(searchTerm)) {
            item.style.display = "none";
        } else {
            item.style.display = "revert";
        }
    });
}

// Render Pokedex

function renderPokemon() {
    for (let j = 0; j < names.length; j++) {
        renderSmallCard(j);
        addBackgrounColor(j);

        if (specialElement_2[j] == null) {
            document.getElementById(`specialty2_${j}`).classList.add('d-none');
        }
    }
}

function addBackgrounColor(j) {
    let currentSpecialty = document.getElementById(`specialty1_${j}`).innerHTML;

    for(let i = 0; i < allTypes.length; i++) {
        if (currentSpecialty === allTypes[i]) {
            document.getElementById(`pokedex_${j}`).classList.add(`pdx_bg_color_${[i]}`);
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
        } else if (action === 'close') {
            showOrCoseCardWindow(false);
            openLibrary(false);
        }
}

function showOrCoseCardWindow(isOpen) {
    const action = isOpen ? 'remove' : 'add';
    document.getElementById("mainInfoBox").classList[action]("d-none");
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
    let currentId = currentPokemon.id;

    for (let i = 0; i < myLibrary.length; i++) {
        let currentArray = myLibrary[i];
        if(currentArray.id === currentId) {
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
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].id === currentId) {
            myLibrary.splice(i, 1);
            break;
        }
    }
}

// Diashow Function

function goForward(j) {
    j++;
    if(j === names.length) {
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

function commingSoon(isOpen) {
    let action = isOpen ? 'remove' : 'add';
    document.getElementById('commingSoon').classList[action]('d-none');

    if (isOpen === false) {
        cardWindow(null, 'close');
    }
}