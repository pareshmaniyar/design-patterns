function RegularObjectCreation() {
    this.obj = new AnySelfDefinedObject;
}
let firstObj = new RegularObjectCreation();
let secondObj = new RegularObjectCreation();
console.log(firstObj.obj, secondObj.obj);
console.log(firstObj.obj === secondObj.obj);// false

// Below is the code
function AnySelfDefinedObject(state = { default: true }) {
    this.state = state;
}

function OneInstance() {
    let ref;
    return {
        getObject: () => {
            if(!ref) {
                ref = new AnySelfDefinedObject();
            }
            return ref;
        }
    };
}

let Singleton = OneInstance();
console.log(Singleton);// Singleton always refers to the same instance of object
let firstInstance = Singleton.getObject();
let secondInstance = Singleton.getObject();
console.log(firstInstance, secondInstance);
console.log(firstInstance === secondInstance); // true
// Try changing states
firstInstance.state = {newState: true};
console.log(firstInstance, secondInstance);
console.log(firstInstance === secondInstance); // true
