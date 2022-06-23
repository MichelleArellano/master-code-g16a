const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const searchNameBtn = document.querySelector("#search-name-btn");
const searchName = document.getElementById("search-name");
const imgPrincipal = document.getElementById("imgPrincipal");
const pokemonName = document.getElementById("pokemonName");
const previous = document.querySelector("#previous");
const id = document.querySelector(".text-id");
const next = document.querySelector("#next");
const cardDetails= document.querySelector(".pokemon-block-back");


let pokemonByName 

searchNameBtn.addEventListener("click", () => {
  if(searchName.value === null || searchName.value === "" ){
    alert("Ingresa un pokemon");
  }else{
    fetchPokemonName(searchName.value.toLowerCase())
  }
});

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

//Obtener pokemones con la pokeapi
let limit = 7;
let offset = 1;
let pokemons = []

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      pokemons.unshift(data)
      spinner.style.display = "none";
    })
    .catch(error=>{
      alert('Hubo un problema buscando por nombre:' + error.message);
  })
}

function fetchPokemonName(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(response=>{
	  return response.json();
  })
  .then(data=>{
	    console.log(data)
      detailsPokemons(data)
      spinner.style.display = "none";
      return data
  })
  .catch(error=>{
    console.log('Hubo un problema buscando por nombre:' + error.message);
    //alertMessage()
    id.innerText = "----->ERROR<-----"
    imgPrincipal.src = "./img/warning-error.png"
})
}

/*function alertMessage(){
 imgPrincipal.src = "./img/warning.webp"
 imgPrincipal.height = "100"
}*/

function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

//Crea cards para cada pokemon
function createPokemon(pokemon) {

  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = `${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const weigth = document.createElement("p");
  weigth.textContent = `Height: ${pokemon.height.toString()}  Weight: ${pokemon.weight.toString()}`;

  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(spriteContainer);
  card.appendChild(weigth);

  cardContainer.appendChild(card);
  pokemonContainer.appendChild(flipCard);
}

function validateSearch(){
  if (searchName === "") {
    searchNameBtn.disabled = true;
  } else {
    searchNameBtn.disabled = false;
  }
}

function detailsPokemons(data) {
  id.innerText = `-----> ID ${data.id} <-----`
  imgPrincipal.src = data.sprites.front_default
  pokemonName.innerText = data.name

  removeChildNodes(cardDetails)
  cardDetails.appendChild(progressBars(data.stats));
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 6; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.classList.add("progress-bar-striped");
    progressBar.classList.add("bg-success");
    progressBar.classList.add("progress-bar-animated");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}


//Elimina cards para cada pokemon
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Elimina progressbar para cada pokemon
function removeChildNodesProgressBar() {
  searchName.value = ""
  while (cardDetails.firstChild) {
    parent.removeChild(cardDetails.firstChild);
  }
}


//Llena la tabla con los pokemon
fetchPokemons(offset, limit);
