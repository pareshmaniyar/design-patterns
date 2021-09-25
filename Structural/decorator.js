class ModelS {
    cost = 74000;
    description = "Model S";
}
class ModelX {
    cost = 77000;
    description = "Model X";
}
class CarDecorator { // Do we need this?

}
class AutoPilot {
    constructor(model) {
        this.cost = model.cost + 4000;
        this.description = model.description + ", with AutoPilot";
    }
}
class SolarRoof {
    constructor(model) {
        this.cost = model.cost + 5000;
        this.description = model.description + ", with SolarRoof";
    }
}
const modelS = new ModelS();
const modelX = new ModelX();
console.log(modelS);
console.log(modelX);
const autoPilotModelS = new AutoPilot(modelS);
console.log(autoPilotModelS, autoPilotModelS.description);

const solarRoofModelX = new SolarRoof(modelX);
console.log(solarRoofModelX, solarRoofModelX.description);
const solarRoofAutoPilotModelX = new AutoPilot(solarRoofModelX);
console.log(solarRoofAutoPilotModelX);

