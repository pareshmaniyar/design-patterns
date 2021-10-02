// It is like any chat application
// One person communicates with all the different parts

interface Application {
    sendMessage(person: Person, message: string, to: string): void;
    registerPerson(person: Person): void;
}

class Discord implements Application {
    sendMessage(person: Person, message: string, to: string) {
        throw new Error("Method not implemented.");
    }
    registerPerson(person: Person) {
        throw new Error("Method not implemented.");
    }
    
}

class WhatsApp implements Application {
    users: any = {};
    log: Array<string> = [];
    sendMessage(person: Person, message: string, to: string) {
        const destination = this.users[to];
        this.log.push(`Message from ${person.name}: ${message} - to ${to}`);
        destination.receivedMessage(message, person.name);
    }
    registerPerson(person: Person) {
        this.users[person.name] = person;
    }
    
}

interface PersonCreator {
    name: string;
    application: Application;
    receivedMessage(message: string, from: string): void;
    sendMessage(message: string, to: string): void;
}

class Person implements PersonCreator {
    name: string;
    application: Application;
    constructor(name: string, application: Application) {
        this.name = name;
        this.application = application;
    }
    receivedMessage(message: string, from: string): void {
        console.log(`Received message by ${this.name}: ${message} - from ${from}`);
    }
    sendMessage(message: string, to: "Suresh"): void {
        console.log(`Sending message from ${this.name} ${message}`);
        this.application.sendMessage(this, message, to);
    }
}
const whatsApp = new WhatsApp();
const mahesh = new Person('Mahesh', whatsApp);
const suresh = new Person('Suresh', whatsApp);
whatsApp.registerPerson(mahesh);
whatsApp.registerPerson(suresh);
mahesh.sendMessage("I don't remember you!", "Suresh");
