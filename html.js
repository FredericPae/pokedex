// Pokedex

function renderSmallCard(j) {
    document.getElementById("pokedex_container").innerHTML += /* html */ `
  
              <div id="pokedex_${j}" class="pokedex hover" onclick="cardWindow(${j}, 'show')">
                  <img class="pokedex_bg" src="./img/pokeball_white.png">
                  <div class="card-1" class="cardDesign">
                      <div id="pokemonName${j}">
                          <h3 class="name-1">${names[j]}</h3> <!-- currentName beinhaltet den Namen und die url des jeweiligen Pokemon (mit ['name'] wird nur der name aus dem Array gelesen) -->
                      </div>
  
                      <div class="short_info">
                          <div class="specialty_container">
                              <span id="specialty1_${j}" class="specialty_description">${specialElement_1[j]}</span>
                              <span id="specialty2_${j}" class="specialty_description">${specialElement_2[j]}</span>
                          </div>
                          <img class="cardImage-1" src="${images[j]}">
                      </div>
                  </div>
              </div>
              `;
  }

  // Render current Pokemoncard

  function renderPokemonCard(j) {
    document.getElementById("infoCardContainer").innerHTML = /* html */ `
        <div id="infoCard${j}">
            <div id="currentPokemon${j}" class="currentPokemon">
              <img class="currentPokemon_bg" src="./img/mainInfoBox_bg.png"/>
              <div id="actionButtons">
                <svg class="goBackArrow hover" onclick="cardWindow(null, 'close')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                <svg id="likeButton${j}" class="likeButton my-svg1 hover" onclick="addToLibrary(${j}, ${true})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <svg id="activLikeButton${j}" class="likeButton d-none my-svg1 hover" onclick="addToLibrary(${j}, ${false})" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
              </div>
              <div>
                <h1 id="pokemonName">${names[j]}</h1>
                <div id="pokemonCategories">
                  <div class="specialty_container_2">
                      <div>
                          <span id="specialty1_${j}" class="specialty_description">${specialElement_1[j]}</span>
                      </div>
                      <div id="specialty2_container${j}">
                          <span id="specialty2_${j}" class="specialty_description">${specialElement_2[j]}</span>
                      </div>
                  </div>
                  
                  <div>
                    <span><b>#${amountOfPokemon[j + 1]}</b></span> <!-- Soll die jeweilie Nummer anzeigen -->
                  </div>
                </div>
              </div>
            </div>
  
            <div class="currentPokemonImg" >
              <img id="pokemonImage" src="${images[j]}"/>
            </div>
  
            <div class="info-container">
              <div class="mainInfoContainer">
                  <div class="menu">
                      <div class="mainInfoBar">
                          <div><span onclick="renderAbout(${j})" class="hover">About</span></div>
                          <div><span onclick="renderBaseStats(${j})" class="hover">Base Stats</span></div>
                      </div>
  
                      <div class="divider">
                      <!-- Devider: height of 2px solid -->
                      </div>
                  </div>
  
                  <div id="current_information_container">
                    
                  </div>
              </div>
            </div>
            <!-- Render navArrows -->
            <div id="navArrowContainer">
                <div id="goBack" class="navArrow z-index hover">
                    <svg onclick="goBack(${j})" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </div>

                <div id="goForward" class="navArrow z-index hover">
                    <svg onclick="goForward(${j})" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </div>
            </div>
        </div>
          `;
  }

// Render Card Menus ("About" & "Base Stats")

function renderAbout(j) {
    document.getElementById('current_information_container').innerHTML = /* html */`
            <table>
                <tbody>
                    <tr>
                        <td class="padding_r70">Height</td>
                        <td class="black">${height[j].toFixed(2).replace('.', ',')} m</td> <!-- durch 10 teilen -->
                    </tr>
                    <tr>
                        <td class="padding_r70">Weight</td>
                        <td class="black">${weight[j].toFixed(2).replace('.', ',')} Kg</td> <!-- durch 10 teilen -->
                    </tr>
                    <tr>
                        <td class="padding_r70">Abilities</td>
                        <td class="black">${abilitie_1[j]}<span id="ability_2${j}">, ${abilitie_2[j]}</span></td>
                    </tr>

                    <tr>
                        <td class="tr_gap16 black"><b>Breeding</b></td>
                    </tr>

                    <tr>
                        <td class="padding_r70">Egg Group/s</td>
                        <td class="black">${eggGroup_1[j]}<span id="eggGroup_2${j}">, ${eggGroup_2[j]}</span></td>
                    </tr>
                    <tr>
                        <td class="padding_r70">Egg Cycle</td>
                        <td class="black">${specialElement_1[j]}</td>
                    </tr>
                </tbody>
            </table>
    `;
}

function renderBaseStats(j) {
    document.getElementById('current_information_container').innerHTML = /* html */`
        <div>
            <canvas id="myChart" height="190px"></canvas>
        </div>
    `;
    renderChart(j); // Function is placed in separat js file (chart.js)
}

// Comming soon (My Pokemon Library)

function commingSoon() {
    document.getElementById('MAIN_CONTAINER').innerHTML += /*html*/ `
    <div id="commingSoon" onclick="closeCommingSoon()">
        <h1 style="color: white;">Comming soon!</h1>
    </div>
    `;
}