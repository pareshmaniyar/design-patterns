/*
- brige implementation and abstraction
- make an object with different params
- it feels like decorator

Example:
Vehicle
    make
    start
        - make.prepare
        - make.accelerate
interface make - prepare, accelerate

Volvo - make
JCB - make
Hero Honda - make

Truck
Bus
Bike

Example:


*/
interface BackCover {
    cost: number;
}
class DefaultCover implements BackCover {
    cost: number = 0;
}
class Book {
    cover: BackCover = new DefaultCover;
    cost: number = 0;
    constructor(cost: number) {
        this.cost = cost;
    }
    build() {
        this.cost += this.cover.cost;
        console.log(`Total cost of book: ${this.cost}`);
    }
}
class PaperBack implements BackCover {
    cost: number = 50;
}
class HardCover implements BackCover {
    cost: number = 70;
}
const book1 = new Book(200);
book1.cover = new PaperBack();
book1.build();
const book2 = new Book(300);
book2.cover = new HardCover();
book2.build();
