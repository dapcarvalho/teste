// === LOGIN SIMPLES ===
function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (usuario === "admin" && senha === "123") {
    window.location.href = "home.html";
  } else {
    erro.textContent = "Usuário ou senha inválidos!";
  }
}

// === SAIR ===
function sair() {
  window.location.href = "login.html";
}

// ===============================================
// === POKÉMONS JÁ EXISTENTES + IMAGENS OFICIAIS ===
// ===============================================

const pokemons = [
  {
    nome: "Mewtwo",
    especie: "Psíquico",
    raridade: "Lendário",
    forca: 98,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    descricao: "Um Pokémon criado geneticamente a partir de Mew."
  },
  {
    nome: "Rayquaza",
    especie: "Dragão/Voador",
    raridade: "Lendário",
    forca: 97,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
    descricao: "O guardião dos céus, capaz de acalmar Groudon e Kyogre."
  },
  {
    nome: "Arceus",
    especie: "Normal",
    raridade: "Mítico",
    forca: 100,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
    descricao: "Diz-se que Arceus criou todo o universo Pokémon."
  },
  {
    nome: "Lugia",
    especie: "Psíquico/Voador",
    raridade: "Lendário",
    forca: 95,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    descricao: "O guardião dos mares, capaz de acalmar tempestades."
  },
  {
    nome: "Ho-Oh",
    especie: "Fogo/Voador",
    raridade: "Lendário",
    forca: 95,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
    descricao: "Diz-se que traz vida com suas chamas sagradas."
  },
  {
    nome: "Groudon",
    especie: "Terra",
    raridade: "Lendário",
    forca: 96,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
    descricao: "Pode expandir continentes com seu poder terrestre."
  },
  {
    nome: "Kyogre",
    especie: "Água",
    raridade: "Lendário",
    forca: 96,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
    descricao: "Criador dos oceanos."
  },
  {
    nome: "Dialga",
    especie: "Aço/Dragão",
    raridade: "Lendário",
    forca: 99,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png",
    descricao: "O Pokémon que controla o tempo."
  },
  {
    nome: "Palkia",
    especie: "Água/Dragão",
    raridade: "Lendário",
    forca: 98,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png",
    descricao: "Controla o espaço."
  },
  {
    nome: "Giratina",
    especie: "Fantasma/Dragão",
    raridade: "Lendário",
    forca: 99,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png",
    descricao: "Habita o Mundo Distorsão."
  },
  {
    nome: "Darkrai",
    especie: "Sombrio",
    raridade: "Mítico",
    forca: 96,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png",
    descricao: "Causa pesadelos eternos."
  },
  {
    nome: "Zekrom",
    especie: "Dragão/Elétrico",
    raridade: "Lendário",
    forca: 97,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png",
    descricao: "Representa ideais e energia pura."
  },
  {
    nome: "Reshiram",
    especie: "Dragão/Fogo",
    raridade: "Lendário",
    forca: 97,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png",
    descricao: "Representa a verdade."
  },
  {
    nome: "Xerneas",
    especie: "Fada",
    raridade: "Lendário",
    forca: 96,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/716.png",
    descricao: "Concede energia vital."
  },
  {
    nome: "Yveltal",
    especie: "Sombrio/Voador",
    raridade: "Lendário",
    forca: 96,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/717.png",
    descricao: "Representa destruição."
  },
  {
    nome: "Solgaleo",
    especie: "Psíquico/Aço",
    raridade: "Lendário",
    forca: 97,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png",
    descricao: "Avatar do Sol."
  },
  {
    nome: "Lunala",
    especie: "Fantasma/Psíquico",
    raridade: "Lendário",
    forca: 97,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/792.png",
    descricao: "Avatar da Lua."
  },

  // === POKÉMONS POPULARES ===
  {
    nome: "Charizard",
    especie: "Fogo/Voador",
    raridade: "Raro",
    forca: 90,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    descricao: "Chamas intensas capazes de derreter pedra."
  },
  {
    nome: "Pikachu",
    especie: "Elétrico",
    raridade: "Comum",
    forca: 70,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao: "O Pokémon elétrico mais famoso do mundo."
  },
  {
    nome: "Gengar",
    especie: "Fantasma/Venenoso",
    raridade: "Raro",
    forca: 88,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    descricao: "A sombra viva que ri do medo alheio."
  },
  {
    nome: "Dragonite",
    especie: "Dragão/Voador",
    raridade: "Raro",
    forca: 91,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    descricao: "Um dragão gentil e extremamente poderoso."
  },
  {
    nome: "Lucario",
    especie: "Lutador/Aço",
    raridade: "Raro",
    forca: 89,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    descricao: "Consegue enxergar a aura dos seres vivos."
  },
  {
    nome: "Greninja",
    especie: "Água/Sombrio",
    raridade: "Raro",
    forca: 90,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
    descricao: "Um ninja veloz que usa shurikens de água."
  },
  {
    nome: "Garchomp",
    especie: "Dragão/Terra",
    raridade: "Raro",
    forca: 92,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    descricao: "Mais rápido que um jato."
  }
];

// ===============================================
//           FUNÇÕES DA POKÉDEX
// ===============================================

function carregarPokedex() {
  const div = document.getElementById("pokedex");
  div.innerHTML = "";

  pokemons.forEach((pkm, index) => {
    div.innerHTML += `
      <div class="card" onclick="abrirModal(${index})">
        <img src="${pkm.imagem}">
        <h3>${pkm.nome}</h3>
      </div>
    `;
  });
}

window.onload = function () {
  if (document.getElementById("pokedex")) {
    carregarPokedex();
  }
};

function filtrarPokemons() {
  const texto = document.getElementById("busca").value.toLowerCase();
  const div = document.getElementById("pokedex");

  div.innerHTML = "";

  pokemons
    .filter(pkm => pkm.nome.toLowerCase().includes(texto))
    .forEach((pkm, index) => {
      div.innerHTML += `
        <div class="card" onclick="abrirModal(${index})">
          <img src="${pkm.imagem}">
          <h3>${pkm.nome}</h3>
        </div>
      `;
    });
}

// === MODAL ===
function abrirModal(i) {
  const pkm = pokemons[i];

  document.getElementById("modal-img").src = pkm.imagem;
  document.getElementById("modal-nome").textContent = pkm.nome;
  document.getElementById("modal-especie").textContent = pkm.especie;
  document.getElementById("modal-raridade").textContent = pkm.raridade;
  document.getElementById("modal-forca").textContent = pkm.forca;
  document.getElementById("modal-desc").textContent = pkm.descricao;

  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}