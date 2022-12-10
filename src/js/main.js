import '../css/style.css';

/* SELECIONANDO OS ELEMENTOS NO DOM */

const inputPesquisa = document.querySelector("#inputPesquisa"); // SELECIONANDO O ID inputPesquisa QUE ESTA NO HTML
const btnLocalizar = document.querySelector("#btnLocalizar");  // SELECIONANDO O ID btnLocalizar QUE ESTA NO HTML
const pokedexDisplay = document.querySelector("#display"); // SELECIONANDO O ID display QUE ESTA NO HTML

/* ADICIONANDO EVENTOS */
btnLocalizar.addEventListener('click', async function () { /* QUANDO ACONTECER O EVENTO 'CLICK', FACA: */
    /* BUSCANDO OS DADOS DO POKEMON NA API */
    const dadosPokemon = await localizarPokemon(inputPesquisa.value); /* IRA PROCURAR O POKEMON QUE ESTIVER DENTRO DA PESQUISA */
    /* CRIANDO O CARTAO DO POKEMON */
    criarCartao(dadosPokemon);
})

async function localizarPokemon (dados) { //FUNCAO QUE FAZ A BUSCA NA API 
    const url = `https://pokeapi.co/api/v2/pokemon/${dados}`;
    const response = await fetch(url); /* ESPERA ACABAR A BUSCA NA URL PARA DEPOIS CONTINUAR O CODIGO DA FUNCAO */
    const pokemon = await response.json();
    // console.log(pokemon)
    return pokemon;
}

function criarCartao (pokemon) { /* FUNCAO QUE CRIA O CARTAO DO POKEMON */
    const cartaoPokemon = document.createElement('div'); /* CRIANDO UMA DIV QUE VAI SER O CARTAO */
    cartaoPokemon.className='cartaoPokemon'; /*ADCIONANDO UMA CLASSE A ESSA DIV*/ 
    cartaoPokemon.innerHTML = `
        <img class="pokemonSprite" src="${pokemon.sprites.other.dream_world.front_default}"/> <!--PEGANDO A IMAGEM DO POKEMON -->
        <h2>${pokemon.name}</h2> <!--PEGANDO O NOME DO POKEMON -->
    `;
    pokedexDisplay.innerHTML = ''; /* O INNERHTML SUBSTITUI, PORTANTO ISSO FAZ SOBREPOR UM ELEMENTO VAZIO NO POKEMON Q JA EXISTE ANTES DE SUBSTITUIR POR UM NOVO*/
    pokedexDisplay.appendChild(cartaoPokemon); /* ADCIONANDO UM ELEMENTO FILHO A DIV DISPLAY DO HTML, O ELEMENTO FOLHO EH A DIV CARTAO POKEMON */
} 