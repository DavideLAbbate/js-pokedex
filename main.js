const arrPokemon = [];
const color = [];
const pokeContainer = document.querySelector(".poke-container");

for(let i = 1; i <= 150; i++){
    fetch('https://pokeapi.co/api/v2/pokemon/'+ i)
        .then(result => result.json())
        .then(data => addPokemon(data.sprites.front_default, data.name, data.id, data.types[0].type.name));   // qui bisogna dare i valori direttamente alla funzione, l'api ritorna un oggetto asincrono, perciò pushare in un array fa sovrascrivere le istruzioni.
                                                                                                             // le stampa nel console.log() ma in realtà l'array è vuoto, infatti non eseguiva nemmeno il for cadavere che trovi li
        
}

console.log(color);

function addPokemon (img, name, id, types){

    pokeContainer.innerHTML += `
    <div class="poke ${types}">
        <span class="img"><img src="${img}"></img></span>
        <span class="idPoke"><p>#${id}</p></span>
        <p class="name">${name}</p>
        <p class="type">type:${types}</p>
    </div>`
}





// for(let i = 0; i < arrPokemon.lenght; i++){    
//     let imgPokè = arrPokemon[i].sprites.front_default;
//     let namePokè= arrPokemon[i].name;
//     let idPokè = arrPokemon[i].id;
//     let typePokè = arrPokemon[i].types;
//     console.log(imgPokè, namePokè, idPokè, typePokè);
//     addPokemon(imgPokè, namePokè, idPokè, typePokè);
// }


   