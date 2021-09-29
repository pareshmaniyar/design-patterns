// Make complex object with simplicity, hiding inner details
// set default, break complexity into different methods

class MakeHouse {
    private name: string;
    private address: Address;
    private rooms: Room;
    private furniture: Furniture;
    constructor(name: string, address: Address) {
        this.name = name;
        this.address = address;
        this.rooms = new Room();
        this.furniture = new Furniture();
    }
    setRoom(...args: any) {
        this.rooms = new Room(...args);
    }
    setFurniture(furniture: Furniture) {
        this.furniture = furniture;
    }
}

class Address {
    street: string;
    country: string;
    pincode: number;
    constructor(street: string, country: string, pincode: number) {
        this.street = street;
        this.country = country;
        this.pincode = pincode;
    }
}

class Room {
    color: string;
    fanColor: string;
    window: PaneWindow;
    constructor(color = "Blue", fanColor = "Black", window = new PaneWindow()) {
        this.color = color;
        this.fanColor = fanColor;
        this.window = window;
    }
}

class PaneWindow {
    color: string;
    glass: boolean;
    mesh: boolean;
    constructor(color = "White", glass = true, mesh = false) {
        this.color = color;
        this.glass = glass;
        this.mesh = mesh;
    }
}

class Furniture {
    woodType: string;
    grade: number;
    constructor(grade = 4, woodType = "Teak") {
        this.grade = grade;
        this.woodType = woodType;
    }
}

const address = new Address('Juhu Chaupati', "India", 24124);
const homeSweetHome = new MakeHouse('Mannat', address);
homeSweetHome.setRoom("Green");
console.log(homeSweetHome);
