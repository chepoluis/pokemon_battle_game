function randomNum(max, min){
    // generate a random number
  
    // min not required
    if(min === undefined || min === '' || min === null){
      // min default value
      min = 0;
    }
  
    // random number, yay
    return Math.floor(Math.random() * (max - min) + min);
}

export const characters = [
  {
    name: "pikachu",
    type: "electric",
    weakness: ["fighting"],
    resistance: ["steel"],
    img: {
      default:
        "http://vignette2.wikia.nocookie.net/all-anime-characters/images/7/7b/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png/revision/latest?cb=20150108111832",
      front:
        "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
      back: "https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif",
    },
    hp: {
      current: 500,
      total: 500,
    },
    attacks: [
      {
        name: "thunder jolt",
        hp: randomNum(40, 20),
        avail: {
          total: 30,
          remaining: 30,
        },
      },
      {
        name: "electro ball",
        hp: randomNum(60, 45),
        avail: {
          total: 10,
          remaining: 10,
        },
      },
      {
        name: "volt tackle",
        hp: randomNum(75, 60),
        avail: {
          total: 5,
          remaining: 5,
        },
      },
      {
        name: "thunder crack",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2,
        },
      },
    ],
    reducirVida: function(daño) {
      console.log("Reducir vida");
      // console.log(this.hp.current);
      this.hp.current - daño;
    },
    amuentarVida: function(vida) {
      this.hp.current + daño;
    }
  },
  {
    name: "charmander",
    type: "fire",
    weakness: ["water"],
    resistance: ["grass"],
    img: {
      default:
        "http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png",
      front:
        "https://projectpokemon.org/images/normal-sprite/charmander.gif",
      back: "https://projectpokemon.org/images/sprites-models/normal-back/charmander.gif",
    },
    hp: {
      current: 500,
      total: 500,
    },
    attacks: [
      {
        name: "ember",
        hp: randomNum(40, 20),
        avail: {
          total: 30,
          remaining: 30,
        },
      },
      {
        name: "flamethrower",
        hp: randomNum(60, 45),
        avail: {
          total: 10,
          remaining: 10,
        },
      },
      {
        name: "burning tail",
        hp: randomNum(75, 60),
        avail: {
          total: 5,
          remaining: 5,
        },
      },
      {
        name: "fire spin",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2,
        },
      },
    ],
  },
  {
    name: "squirtle",
    type: "water",
    weakness: ["electric", "grass"],
    resistance: ["normal", "fire"],
    img: {
      default:
        "http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es",
      front:
        "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
      back: "http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426",
    },
    hp: {
      current: 500,
      total: 500,
    },
    attacks: [
      {
        name: "bubble",
        hp: randomNum(40, 20),
        avail: {
          total: 30,
          remaining: 30,
        },
      },
      {
        name: "water gun",
        hp: randomNum(60, 45),
        avail: {
          total: 10,
          remaining: 10,
        },
      },
      {
        name: "shell attack",
        hp: randomNum(75, 60),
        avail: {
          total: 5,
          remaining: 5,
        },
      },
      {
        name: "hydro pump",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2,
        },
      },
    ],
  },
  {
    name: "bulbasaur",
    type: "grass",
    weakness: ["fire"],
    resistance: ["water", "psychic"],
    img: {
      default:
        "http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818",
      front: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
      back: "https://projectpokemon.org/images/sprites-models/normal-back/bulbasaur.gif",
      deranged:
        "http://rs522.pbsrc.com/albums/w348/Richtoon18/b3617568f13aa750c57eacc45d0b2da7.gif~c200",
      sleep:
        "https://31.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif",
    },
    hp: {
      current: 500,
      total: 500,
    },
    attacks: [
      {
        name: "tackle",
        hp: randomNum(40, 20),
        avail: {
          total: 30,
          remaining: 30,
        },
      },
      {
        name: "vine whip",
        hp: randomNum(60, 45),
        avail: {
          total: 10,
          remaining: 10,
        },
      },
      {
        name: "razor leaf",
        hp: randomNum(75, 60),
        avail: {
          total: 5,
          remaining: 5,
        },
      },
      {
        name: "solar beam",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2,
        },
      },
    ],
  },
  {
    name: "machop",
    type: "fighting",
    weakness: ["psychic", "electric"],
    resistance: [],
    img: {
      default: "http://clipart.toonarific.com/data/media/11/pokemon066.gif",
      front: "http://graphics.tppcrpg.net/xy/normal/066F.gif",
      back: "https://projectpokemon.org/images/sprites-models/normal-back/machop.gif",
    },
    hp: {
      current: 500,
      total: 500,
    },
    attacks: [
      {
        name: "low kick",
        hp: randomNum(40, 20),
        avail: {
          total: 30,
          remaining: 30,
        },
      },
      {
        name: "karate chop",
        hp: randomNum(60, 45),
        avail: {
          total: 10,
          remaining: 10,
        },
      },
      {
        name: "seismic toss",
        hp: randomNum(75, 60),
        avail: {
          total: 5,
          remaining: 5,
        },
      },
      {
        name: "hundred furious punches",
        hp: randomNum(160, 130),
        avail: {
          total: 2,
          remaining: 2,
        },
      },
    ],
  },
];
