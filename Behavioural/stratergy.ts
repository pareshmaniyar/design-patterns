/*
- Operate on data using different algorithms

*/
class Book {
    title: string = "";
    constructor(title: string) {
        this.title = title;
    }
}

interface Transport {
    transport(book: Book): void;
}
class AeroPlane implements Transport {
    transport(book: Book): void{
        console.log(`Loading ${book.title} in the plane`);
    }
}
class Train implements Transport {
    transport(book: Book): void{
        console.log(`Loading ${book.title} in the train`);
    }
}
class Ship implements Transport {
    transport(book: Book): void{
        console.log(`Loading ${book.title} in the ship`);
    }
}

class Store {
    log: Array<string> = [];
    transport(book: Book, mode: string): void {
        let modeOfTransport: Transport;
        switch (mode) {
            case "emergency":
                modeOfTransport = new AeroPlane();
                break;
            case "normal":
                modeOfTransport = new Train();
                break;
            case "go-green":
                modeOfTransport = new Ship();
                break;
            default:
                modeOfTransport = new Train();
        }
        modeOfTransport.transport(book);
    }
}
const book1 = new Book("Sapiens");
const book2 = new Book("Homo deus");
const book3 = new Book("21 problems of 21st century");
const store = new Store();

store.transport(book1, 'emergency');
store.transport(book2, 'normal');
store.transport(book3, 'go-green');

