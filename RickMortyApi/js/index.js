document.addEventListener("DOMContentLoaded", sawCharacters);
 
function sawCharacters() {
    const characterList = document.querySelector("#characterList");
    let URL = "https://rickandmortyapi.com/api/character/";

    for (let i = 1; i <= 45; i++) {
    fetch(URL + i)
        .then((Response) => Response.json())
        .then(data => addToCharacterList(data, characterList)) 
    }
}

function addToCharacterList(rickData, characterList) {

    const div = document.createElement("div");
    div.classList.add("character");
    div.innerHTML = `    
            <div class="characterImg">
                <img src="${rickData.image}" alt="${rickData.name}">
            </div>
            <div class="characterInfo">
                <h2 class="characterName">${rickData.name}</h2>
            </div>
        `;

    characterList.append(div);
}


