/*
- like command but focus is on the object rather than command itself
- memory of objects
- time travel in redux debugging

Terminology
- Originator - Store current state
- Caretaker - storing states
Why are both there? I can manage memento by one other class?
I'll implement without Originator
I'll be making paint app

*/

class Rectangle {
    height: number = 10;
    width: number = 10;
    color: string = "white";
    border: string = "1px";
    borderColor: string = "black";
}

class Caretaker {
    currState: number = -1;
    history: Array<Rectangle> = [];
    addMemento(memento: Rectangle): void {
        this.history.length = this.currState + 1;
        this.history.push(JSON.parse(JSON.stringify(memento)));
        this.currState = this.history.length - 1;
    }
    getState(): Rectangle {
        return this.history[this.currState];
    }
    undo() {
        if(this.currState === 0) return;
        this.currState--;
    }
    redo() {
        if(this.currState === this.history.length) return;
        this.currState++;
    }
}

let rectangle = new Rectangle();
const caretaker = new Caretaker();

caretaker.addMemento(rectangle);
console.log(caretaker.getState());

rectangle.height = 20;
caretaker.addMemento(rectangle);
console.log(caretaker.getState());

caretaker.undo();
rectangle = caretaker.getState();
console.log(rectangle);

caretaker.redo();
rectangle = caretaker.getState();
console.log(rectangle);
