let start = [1];
let showPokemon = [36];
let currentPokemonCard = [];
let amountOfPokemon = [];
let responseAsJson;
let names = [];
let images = [];
let height = [];
let weight = [];
let abilitie_1 = [];
let abilitie_2 = [];
let eggGroup_1 = [];
let eggGroup_2 = [];
let specialElement_1 = [];
let specialElement_2 = [];
let allTypes = [];
let stats = [];
let myLibrary = [];

// Load Pokemon from API

        function loadMorePokemon() {
            let renderNext20 = +start + +35;
            let showMorePokemon = +showPokemon + +35;
            start = renderNext20;
            showPokemon = showMorePokemon;
            document.getElementById(`pokedex_container`).innerHTML = '';
            loadPokemon();
        }

        async function loadPokemon() {
            loadingScreen(true);
            for (let i = start; i < showPokemon; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
            let response = await fetch(url);
            responseAsJson = await response.json();
            pushToArrays();
            await collectAllEggGroups(i);
            }
            await collectAllTypes();
            generateCardNumber();
            renderPokemon();
            loadingScreen(false);
        }

        function pushToArrays() {
            names.push(responseAsJson['name'].charAt(0).toUpperCase() + responseAsJson['name'].slice(1));
            images.push(responseAsJson['sprites']['other']['dream_world']['front_default']);
            height.push(responseAsJson['height']/10);
            weight.push(responseAsJson['weight']/10);
            abilitie_1.push(responseAsJson['abilities']['0']['ability']['name']);
            specialElement_1.push(responseAsJson['types']['0']['type']['name']);
            stats.push(responseAsJson['stats']);
            ifAvailablePushToArray();
        }

        function ifAvailablePushToArray() {
            if(responseAsJson['abilities'].length === 1) {
                abilitie_2.push(null);
            } else {
                abilitie_2.push(responseAsJson['abilities']['1']['ability']['name']);
            }
            if (responseAsJson['types'].length === 1) {
                specialElement_2.push(null);
            } else {
                specialElement_2.push(responseAsJson['types']['1']['type']['name']);
            }
        }

        function generateCardNumber() {
            if(amountOfPokemon <= 35) {
                for(let i = 0; i <= names.length; i++) {
                    amountOfPokemon.push(i);
            }
            } else {
                for(let i = start; i <= names.length; i++) {
                    amountOfPokemon.push(i);
            }
            }
        }

        async function collectAllTypes() {
            if(allTypes < 18) {
            for (let i = 0; i < 18; i++) {
                let url = `https://pokeapi.co/api/v2/type/`;
                let response = await fetch(url);
                let responseAsJson = await response.json();
                allTypes.push(responseAsJson['results'][i]['name']);
            }
            }
        }

        async function collectAllEggGroups(i) {
            let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
            let response = await fetch(url);
            let responseAsJson = await response.json();

            if (responseAsJson['egg_groups'].length === 1) {
                eggGroup_1.push(responseAsJson['egg_groups']['0']['name']);
                eggGroup_2.push(null);
            } else {
                eggGroup_1.push(responseAsJson['egg_groups']['0']['name']);
                eggGroup_2.push(responseAsJson['egg_groups']['1']['name']);
            }
        }