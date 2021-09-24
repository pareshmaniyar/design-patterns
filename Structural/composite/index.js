// Tree like structure where leaf and composite object share same properties and
const Pokemon = require('./Pokemon');
const Elements = require('./Elements');

const pikachu = new Pokemon("Pikachu", 80, "Electric");

const charizard = new Pokemon("Charizard", 90, "Fire");
const magmar = new Pokemon("Magmar", 85, "Fire");
const fire = new Elements("Fire Pokemons", "Fire", [charizard, magmar]);

const squirtle = new Pokemon("Squirtle", 75, "Water");
const blastoise = new Pokemon("Blastoise", 85, "Water");
const water = new Elements("Water Pokemons", "Water", [squirtle, blastoise]);

const allPokemons = new Elements("All Pokemons", "All", [pikachu, fire, water]);

console.log(`${pikachu.name} - ${pikachu.power} - ${pikachu.type}`);
console.log(`${fire.name} - ${fire.power} - ${fire.type}`);
console.log(`${water.name} - ${water.power} - ${water.type}`);
console.log(`${allPokemons.name} - ${allPokemons.power} - ${allPokemons.type}`);
