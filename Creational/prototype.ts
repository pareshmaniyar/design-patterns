// Create new Instances of Object from old object
// best example is copy paste in excel

abstract class SeedCreator {
    public abstract clone(): SeedCreator;
}
let counter = 0;
class Mango extends SeedCreator {
    id: number = counter++;
    rip: boolean = false;
    weight: number = 0;
    constructor(weight: number) {
        super();
        this.weight = weight;
    }
    eat() {
        console.log(`Eating mango: ${this.id}`);
    }
    giveTime() {
        this.rip = true;
        console.log("Riped now!");
    }
    clone() {
        const clonedObject = new Mango(this.weight);
        clonedObject.rip = this.rip;
        return clonedObject;
    }
}

const mango = new Mango(1);
const mango2 = mango.clone();
mango.giveTime();
const mango3 = mango.clone();
mango.eat();
mango2.eat();
mango3.eat();
console.log(mango, mango2, mango3);
