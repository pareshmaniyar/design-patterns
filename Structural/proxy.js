/*
- Placeholder for another object
- Use cases
    1. Lighweight object rather than resource intensive one
    2. Security Protection
    3. Local representation for remote instance
*/

// Mock External API

const getFootballPlayers = function(team) {
    console.log(`Calling external API with ${team}`);
    switch (team) {
        case "Man-city": return ["De Bryune", "Sterling", "Walker", "Gundogan"];
        case "Man-U": return ["Ronaldo", "Martial", "Rashford", "Fernandez"];
        case "Arsenal": return ["Aubameyang", "Xhaka", "Martey"];
        case "Tottenham": return ["Harry Kane", "Hun men Song"];
        case "PSG": return ["Messi", "Neymar", "Mbappe", "Di Maria"];
        default: return [];
    }
}
const cache = {};
const proxyServer = function(team) {
    if(team in cache) return cache[team];
    return cache[team] = getFootballPlayers(team);
}

console.log(proxyServer("PSG"));
console.log(proxyServer("Arsenal"));
console.log(proxyServer("Man-city"));
console.log(proxyServer("Man-U"));
console.log(proxyServer("Arsenal"));
console.log(proxyServer("Tottenham"));
console.log(proxyServer("PSG"));
