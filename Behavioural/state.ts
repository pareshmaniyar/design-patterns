/*
All states have similar methods to execute
- hard to find examples where the methods are similar
Game with 3 States
    1. Normal - 1x
    2. Boosted - 1.5x
    3. Beast - 2x

getsHealth - nextMode
getShot - prevMode
hitTarget - +1
missTarget - -1

Looks similar to composite
Character looks similar to mediator but the states change rather than Character

*/

class Character {
    public points: number;
    public mode: Mode;
    public normal: Mode;
    public boosted: Mode;
    public beast: Mode;

    constructor() {
        this.points = 0;
        this.normal = new Normal(this);
        this.boosted = new Boosted(this);
        this.beast = new Beast(this);
        this.mode = this.normal;
    }

    setMode(mode: Mode) {
        this.mode = mode;
    }
    
    getPoints(): number {
        return this.points;
    }
}

interface Mode {
    character: Character;
    getsHealth(): void;
    getsShot(): void;
    hitTarget(): void;
    missTarget(): void;
}

class Normal implements Mode {
    character: Character;
    constructor(character: Character) {
        this.character = character;
    }
    public getsHealth()  {
        this.character.setMode(this.character.boosted);
    }
    public getsShot() {
        console.log("You need time to recover");
    }
    
    public hitTarget() {
        this.character.points++;
        console.log(`Current points: ${this.character.points}`);
    }
    public missTarget() {
        this.character.points--;
        console.log(`Current points: ${this.character.points}`);
    }
}

class Boosted implements Mode {
    character: Character;
    constructor(character: Character) {
        this.character = character;
    }
    public getsHealth() {
        this.character.setMode(this.character.beast);
    }
    public getsShot() {
        this.character.setMode(this.character.normal);
    }
    public hitTarget() {
        this.character.points += 1.5;
        console.log(`Current points: ${this.character.points}`);
    }
    public missTarget() {
        this.character.points -= 1.5;
        console.log(`Current points: ${this.character.points}`);
    }

}
class Beast implements Mode {
    character: Character;
    constructor(character: Character) {
        this.character = character;
    }
    public getsHealth() {
        console.log("You've reached god level, chill now!");
    }
    public getsShot() {
        this.character.setMode(this.character.boosted);
    }
    public hitTarget() {
        this.character.points += 2;
        console.log(`Current points: ${this.character.points}`);
    }
    public missTarget() {
        this.character.points -= 2;
        console.log(`Current points: ${this.character.points}`);
    }

}

let mortalKombat = new Character();
let points = mortalKombat.getPoints();
mortalKombat.mode.hitTarget();
mortalKombat.mode.getsHealth();
mortalKombat.mode.hitTarget();
mortalKombat.mode.getsShot();
mortalKombat.mode.missTarget();
