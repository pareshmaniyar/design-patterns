class Elements {
    constructor(name, type, pokemons) {
        this.name = name;
        this.type = type;
        this.pokemons = pokemons;
        this.power = pokemons.reduce((accum, pokemon) => (pokemon.power + accum), 0);
    }
}

module.exports = Elements;
