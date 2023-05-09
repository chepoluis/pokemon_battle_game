import { characters } from "./characters.js";
import { flash, generarNumeroRandom, increaseOrDecreaseDamage, showCustomAlert } from "./utils.js";

const charactersDiv = document.querySelector(".characters");
const instrucciones = document.querySelector(".instructions");
const pokemonImgHero = document.querySelector(".character_pokemon");
const choosePokemon = document.querySelector(".chosse_pokemon");
const options = document.querySelector(".options");
const powers = document.querySelector("#acciones");
const potions = document.querySelector("#potions");
const potions_button = document.querySelector("#pociones");
const attack_button = document.querySelector("#pelear");
const back_button = document.querySelectorAll(".atras");
const attack_buttons = document.querySelectorAll(".attack");
const messages_p = document.querySelector(".messages");

const audio_background =  document.querySelector('#audio-background');
const hit_audio =  document.querySelector('#hit_sound');
const win_audio =  document.querySelector('#win_sound');

// Enemy elements
const enemy_name = document.querySelector(".enemy h2");
const enemy_image = document.querySelector(".enemy img");
const enemy_hp = document.querySelector(".enemy progress");

// My pokemon elements
const pokemon_name = document.querySelector(".hero h2");
const pokemon_image = document.querySelector(".hero img");
const pokemon_hp = document.querySelector(".hero progress");
const pokemon_status_hp = document.querySelector(".hero .status_hp");
const pokemon_curar = document.querySelector(".curar");

let enemy = {};
let pokemon_hero = {};
let my_potions = generarNumeroRandom(0, 3);
const total_potions = my_potions;

function loadEnemyPokemon() {
  enemy = characters[0];
  // console.log(enemy);

  // Enemy
  enemy_name.textContent = enemy.name;
  enemy_image.src = enemy.img.front;
  enemy_hp.max = enemy.hp.total;
  enemy_hp.value = enemy.hp.current;
  // console.log(enemy.img.front);
}

function loadMyPokemon(poke) {
  audio_background.play();

  // Ocultar pokemones e instrucciones
  choosePokemon.style.display = "none";
  pokemon_hero = poke;

  showMessages(`${pokemon_hero.name} esta listo para pelear!`);

  // My pokemon
  pokemon_name.textContent = pokemon_hero.name;
  pokemon_image.src = pokemon_hero.img.back;

  pokemon_hp.max = pokemon_hero.hp.total;
  pokemon_hp.value = pokemon_hero.hp.current;
  pokemon_status_hp.textContent = `${pokemon_hero.hp.current}/${pokemon_hero.hp.total}`;

  attack_buttons.forEach((btn, index) => {
    const attacks = pokemon_hero.attacks[index];

    btn.textContent = `${attacks.name} ${attacks.avail.remaining}/${attacks.avail.total}`;
    btn.addEventListener("click", () => {
      attack_pokemon(attacks.hp, btn, index);
    });
  });

  pokemon_curar.textContent = `Curar ${my_potions}/${total_potions}`;
  // console.log(pokemon_hero);
}

loadEnemyPokemon();

function loadCharacters() {
  characters.forEach((char) => {
    const pokemonImg = document.createElement("img");
    pokemonImg.classList.add("character_pokemon");
    pokemonImg.addEventListener("click", () => {
        loadMyPokemon(char);
    });
    // console.log("Pokemonesss");
    // console.log(char);
    pokemonImg.src = char.img.front;

    charactersDiv.append(pokemonImg);
  });
}


loadCharacters();

function attack_pokemon(hp, attack_btn, index) {
  flash();
  playHitSound();

  const attacks = pokemon_hero.attacks[index];

  if (attacks.avail.remaining <= 0) {
    showCustomAlert("No disponible", false, true);
    return;
  }

  // console.log("Atack: ", hp);
  const damageCounter = increaseOrDecreaseDamage(
    hp,
    pokemon_hero.type,
    enemy.weakness,
    enemy.resistance
  );

  enemy.hp.current = enemy.hp.current - damageCounter;
  enemy_hp.value = enemy.hp.current;

  showMessages(`${pokemon_hero.name} uso ${attacks.name}`);

  // Update remaining attacks
  attacks.avail.remaining = attacks.avail.remaining - 1;
  attack_btn.textContent = `${attacks.name} ${attacks.avail.remaining}/${attacks.avail.total}`;

  // console.log("HEAAALTH ", enemy.hp.current);
  if (enemy.hp.current <= 0) {
    checkHealth();
  } else {
    setTimeout(() => {
      enemy_attack();
    }, 1000);
  }
}

function checkHealth() {
  if (pokemon_hero.hp.current <= 0) {
    showCustomAlert("Perdiste!!!");
  } else if (enemy.hp.current <= 0) {
    audio_background.pause();
    win_audio.play();
    
    showCustomAlert("Ganaste!!!", true);

  }
}

function playHitSound() {
  hit_audio.currentTime = 0;
  hit_audio.play();
}

function enemy_attack() {
  // console.log("ENEMY ATTACK");
  flash();
  playHitSound();
  
  const attack_power = enemy.attacks[generarNumeroRandom(1, 3)];

  // console.log(attack_power);

  // console.log({pokemon_hero});
  const damageCounter = increaseOrDecreaseDamage(
    attack_power.hp,
    enemy.type,
    pokemon_hero.weakness,
    pokemon_hero.resistance
  );

  // pokemon_hero.hp.current =
  //   pokemon_hero.hp.current - damageCounter < 0
  //     ? 0
  //     // : pokemon_hero.hp.current - attack_power.hp;
  //     : pokemon_hero.hp.current - damageCounter;
  
  // pokemon_hero.reducirVida(damageCounter);
      
  pokemon_hp.value = pokemon_hero.hp.current;
  pokemon_status_hp.textContent = `${pokemon_hero.hp.current}/${pokemon_hero.hp.total}`;

  checkHealth();
}

function curarPokemon() {
  if (my_potions > 0) {
    if (pokemon_hero.hp.current === pokemon_hero.hp.total) {
      showCustomAlert("Tienes vida maxima", false, true);

      return;
    }

    const increaseHp = generarNumeroRandom(30, 200);

    my_potions = my_potions - 1;

    pokemon_hero.hp.current =
      (pokemon_hero.hp.current + increaseHp) >
      pokemon_hero.hp.total
        ? pokemon_hero.hp.total
        : pokemon_hero.hp.current + increaseHp;

    pokemon_hp.value = pokemon_hero.hp.current;

    pokemon_status_hp.textContent = `${pokemon_hero.hp.current}/${pokemon_hero.hp.total}`;

    pokemon_curar.textContent = `Curar ${my_potions}/${total_potions}`;
  } else {
    showCustomAlert("Sin pociones", false, true);
  }
}

function showMessages(message) {
  messages_p.textContent = message;

  messages_p.classList.remove("typing");
  
  void messages_p.offsetWidth;

  messages_p.classList.add("typing");
}

function mostrarAcciones() {
  options.classList.remove("hidden");
  powers.classList.add("hidden");
  potions.classList.add("hidden");
}

function mostrarPowers() {
  options.classList.add("hidden");
  powers.classList.remove("hidden");
}

function mostrarPociones() {
  options.classList.add("hidden");
  potions.classList.remove("hidden");
}

attack_button.addEventListener("click", mostrarPowers);
potions_button.addEventListener("click", mostrarPociones);
back_button.forEach((btn) => {
  btn.addEventListener("click", mostrarAcciones);
});
pokemon_curar.addEventListener("click", () => {
  curarPokemon();
});
