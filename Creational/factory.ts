
interface Animal {
    sound(): void;
}

class Octopus implements Animal {
    sound(): void {
        console.log("No sound, I fart black cloud and run away");
    }
}

class LyreBird implements Animal {
    sound(): void {
        console.log('I can mimic any sound accurately!');
    }
}

abstract class AnimalCreator {
    abstract createAnimal(): Animal;
    makeSound() {
        let animal = this.createAnimal();
        animal.sound();
    }
}

class OctopusCreator extends AnimalCreator {
    createAnimal(): Animal {
        return new Octopus();
    }
}

class LyreBirdCreator extends AnimalCreator {
    createAnimal(): Animal {
        return new LyreBird();
    }
}

class ClientCode {
    private static animal: AnimalCreator;
    static main(name: string): void {
        if(name === "octopus") {
            this.animal = new OctopusCreator();
        } else if(name === "lyrebird") {
            this.animal = new LyreBirdCreator();
        }
        this.animal.makeSound();
    }
}
ClientCode.main('octopus');
// Create similar objects
// Java impl is different where factory creates different creators of object

// Add legal papers, bill, ship
class Nano {
    public id: number = counter++;
    public name: string = "Nano";
    public cost: number = 100000;
    public mileage: number = 25;
}
class Activa {
    public id: number = counter++;
    public name: string = "Honda Activa";
    public cost: number = 70000;
    public mileage: number = 40;
    public weight: string = "103-113 kg";
    public maxCarryingCapacity: string = "109 kg";
}
let counter = 1;
class Cycle {
    public id: number = counter++;
    public name: string = "Cycle";
    public cost: number = 10000;
    public noOfGears: number = 18;
    public maxCarryingCapacity: string = "100 kg";
    constructor({ electric }: any = { electric: false }) {
        if(electric) {
            this.cost = 30000;
        }
    }
}
class Tesla {
    public id: number = counter++;
    public name: string = "Tesla";
    public cost: number = 2700000;
    public mileage: number = 250;
}

abstract class VehicleFactory {
    public vehicle: any;
    abstract createVehicle(name: string, customization?: any): any;
    addDocument() {
        console.log(`Adding Billing of ${this.vehicle.cost}, User Manual, Maintenace manual to vehicle: ${this.vehicle.name}`);
    }
    wash() {
        console.log(`Wash vehicle: ${this.vehicle.name}`);
    }
    ship() {
        console.log(`Add to cargo shipment: ${this.vehicle.name}`);
    }
}

class PetrolVehicle extends VehicleFactory {
    createVehicle(name: string) {
        switch(name) {
            case 'Activa':
                this.vehicle = new Activa();
                break;
            case 'Nano':
                this.vehicle = new Nano();
                break;
        }
        return this.vehicle;
    }
}

class EnvironmentFriendlyVehicle extends VehicleFactory {
    createVehicle(name: string, customization?: any) {
        switch(name) {
            case 'Cycle':
                this.vehicle = new Cycle(customization);
                break;
            case 'Tesla':
                this.vehicle = new Tesla();
                break;
        }
        return this.vehicle;
    }
}
const petrolVehicle = new PetrolVehicle();
const nano1 = petrolVehicle.createVehicle('Nano');
const nano2 = petrolVehicle.createVehicle('Nano');
const activa1 = petrolVehicle.createVehicle('Activa');
const activa2 = petrolVehicle.createVehicle('Activa');
console.log(nano1 === nano2, nano1, nano2, activa1, activa2);
const envFriendlyVehicle = new EnvironmentFriendlyVehicle();
const cycle1 = envFriendlyVehicle.createVehicle('Cycle', { electric: true });
const cycle2 = envFriendlyVehicle.createVehicle('Cycle');
const tesla1 = envFriendlyVehicle.createVehicle('Tesla');
const tesla2 = envFriendlyVehicle.createVehicle('Tesla');
console.log(cycle1, cycle2, tesla1, tesla2);


// Below is the normal way of doing things

class Vehicle {
    public vehicle: any;
    constructor(name: string) {
        switch(name) {
            case 'Activa':
                this.vehicle = new Activa();
                break;
            case 'Cycle':
                this.vehicle = new Cycle();
                break;
            case 'Default':
                throw new Error("Vehicle not Found!");
        }
    }
    addDocument() {
        console.log(`Adding Billing of ${this.vehicle.cost}, User Manual, Maintenace manual to vehicle: ${this.vehicle.name}`);
    }
    wash() {
        console.log(`Wash vehicle: ${this.vehicle.name}`);
    }
    ship() {
        console.log(`Add to cargo shipment: ${this.vehicle.name}`);
    }
}
const cycle = new Vehicle('Cycle');
const activa = new Vehicle('Activa');
activa.addDocument();
activa.wash();
activa.ship();
cycle.addDocument();
cycle.wash();
cycle.ship();

