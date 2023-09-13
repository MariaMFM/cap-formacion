document.addEventListener("DOMContentLoaded", sawCharacters);

const previousBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentPage = 1;

function sawCharacters() {
    const characterList = document.querySelector("#characterList");
    let URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            addToCharacterList(data.results, characterList);
            updatePagination(data.info);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

function addToCharacterList(characters, characterList) {
    characterList.innerHTML = "";

    characters.forEach((character) => {
        const div = document.createElement("div");
        div.classList.add("character");
        div.innerHTML = `    
            <div class="characterImg">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="characterInfo">
                <h2 class="characterName">${character.name}</h2>
            </div>
        `;

        characterList.appendChild(div);
    });
}

function updatePagination(info) {
    previousBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === info.pages;
}

previousBtn.addEventListener("click", () => {
    currentPage--;
    sawCharacters(currentPage);
    
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    sawCharacters(currentPage);
   
});

//sawCharacters();