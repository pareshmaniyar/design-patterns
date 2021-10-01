// Create new Instances of Object from old object
// best example is copy paste in excel

abstract class SeedCreator {
    public abstract clone(): SeedCreator;
}
let counter = 0;
class Mango extends SeedCreator {
    id: number = counter++;
    eat() {
        console.log(`Eating mango: ${this.id}`);
    }
    clone() {
        return new Mango();
    }
}

const mango = new Mango();
const mango2 = mango.clone();
mango2.eat();
mango.eat();
