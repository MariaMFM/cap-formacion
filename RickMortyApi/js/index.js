document.addEventListener("DOMContentLoaded", sawCharacters);

const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

const nameFilter = document.querySelector("#name-filter");
const statusFilter = document.querySelector("#status-filter");
const speciesFilter = document.querySelector("#species-filter");
const typeFilter = document.querySelector("#type-filter");
const genderFilter = document.querySelector("#gender-filter");

let currentPage = 1;

function sawCharacters() {
    const characterList = document.querySelector("#character-list");
    const nameValue = nameFilter.value.trim();
    const statusValue = statusFilter.value;
    const speciesValue = speciesFilter.value.trim();
    const typeValue = typeFilter.value.trim();
    const genderValue = genderFilter.value;

    let URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${nameValue}&status=${statusValue}&species=${speciesValue}&type=${typeValue}&gender=${genderValue}`;

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
            <div class="character-img">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="character-info">
                <h2 class="character-name">${character.name}</h2>
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

nameFilter.addEventListener('input', () => {
    sawCharacters();
});

speciesFilter.addEventListener('input', () => {
    sawCharacters();
});

typeFilter.addEventListener('input', () => {
    sawCharacters();
});

statusFilter.addEventListener('change', () => {
    sawCharacters();
});

genderFilter.addEventListener('change', () => {
    sawCharacters();
});
