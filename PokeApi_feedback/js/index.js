document.addEventListener("DOMContentLoaded", sawPokemon);
 
function sawPokemon() {
    const pokemonList = document.querySelector("#pokemonList");
    let URL = "https://pokeapi.co/api/v2/pokemon/";

    for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((Response) => Response.json())
        .then(data => addToPokemonList(data, pokemonList)) 
    }
}

function addToPokemonList(pokeData, pokemonList) {

    let pokeId = pokeData.id.toString();
    pokeId = pokeId.padStart(3, "000");
       
    /*if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }*/
    
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `    
            <div class="pokeImg">
                <img src="${pokeData.sprites.other["official-artwork"].front_default}" alt="${pokeData.name}">
            </div>
            <div class="pokeInfo">
                <p class="pokeId">#${pokeId}</p>
                <h2 class="pokeName">${pokeData.name}</h2>
            </div>
        `;

    pokemonList.append(div);
}





