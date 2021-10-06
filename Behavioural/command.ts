// Looks similar to memento, decorator
// Good example is undo/redo

interface Pokemon {
    attack(): void;
    evolvesTo(): void;
}

class Pikachu implements Pokemon {
    attack() {
        console.log("Electric shock!");
    }
    evolvesTo() {
        console.log("I can be Raichu next!");
    }
}

class Charmander implements Pokemon {
    attack() {
        console.log("Fire blast!");
    }
    evolvesTo() {
        console.log("I can be Charmeleon next!");
    }
}

class PokeBall {
    pokemon!: Pokemon;
    insertPokemon(pokemon: Pokemon) {
        this.pokemon = pokemon;
    }
    openUp() {
        this.pokemon.attack();
    }
    findEvolution() {
        this.pokemon.evolvesTo();
    }
}

const pikachu = new Pikachu();
const charmander = new Charmander();
const pokeball = new PokeBall();
pokeball.insertPokemon(pikachu);
pokeball.openUp();
pokeball.findEvolution();
pokeball.insertPokemon(charmander);
pokeball.openUp();
pokeball.findEvolution();
