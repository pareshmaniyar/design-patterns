// Java impl is different where factory creates different creators of object

function characterCreation(name, contentName, quote) {
    let obj = {};
    obj.name = name;
    obj.contentName = contentName;
    obj.quote = quote;
    return obj;
}
const characters = [];
characters.push(characterCreation("Rick", "Rick and Morty", "Waba luba lumb dumb"));
characters.push(characterCreation("Ironman", "Marvel Universe", "I'm Ironman"));
characters.push(characterCreation("Batman", "DC Universe", "It's not what we are inside but what we do that defines us!"));
characters.push(characterCreation("Captain America", "Marvel Universe", "I can do this all day!"));
characters.push(characterCreation("Joker", "DC Universe", "What doesn't kill you simply makes you a stranger!"));
characters.push(characterCreation("Poo the Panda", "Kung Fu Panda", "Schedush!"));

function introduction() {
    console.log(`"${this.quote}" - ${this.name} (part of ${this.contentName})`);
}

characters.forEach(character => introduction.call(character));
