/*
- Different Data, different processes
- very can mix and match different data with different process

Example?
Based on different games and seatLocation, we assign ticket value

*/

interface User {
    multiplicationFactor: number;
}

class Normal implements User {
    multiplicationFactor: number = 1;
}

class Vip implements User {
    multiplicationFactor: number = 2;
}

interface Game {
    gameCost: number;
    numOfTickets: number;
    ticketPrice(user: User): void;
}

class Cricket implements Game {
    gameCost: number = 200;
    numOfTickets: number = 0;
    constructor(numOfTickets: number) {
        this.numOfTickets = numOfTickets;
    }
    ticketPrice(user: User): void {
        const totalCost = user.multiplicationFactor * this.gameCost * this.numOfTickets;
        console.log(totalCost);
    }
}

class Football implements Game {
    gameCost: number = 300;
    numOfTickets: number = 0;
    constructor(numOfTickets: number) {
        this.numOfTickets = numOfTickets;
    }
    ticketPrice(user: User): void {
        const totalCost = user.multiplicationFactor * this.gameCost * this.numOfTickets;
        console.log(totalCost);
    }
}

class Hockey implements Game {
    gameCost: number = 400;
    numOfTickets: number = 0;
    constructor(numOfTickets: number) {
        this.numOfTickets = numOfTickets;
    }
    ticketPrice(user: User): void {
        const totalCost = user.multiplicationFactor * this.gameCost * this.numOfTickets;
        console.log(totalCost);
    }
}
const normal = new Normal();
const vip = new Vip();

const cricket = new Cricket(1);
const football = new Football(2);
const hockey = new Hockey(3);

cricket.ticketPrice(normal);
cricket.ticketPrice(vip);

football.ticketPrice(normal);
football.ticketPrice(vip);

hockey.ticketPrice(normal);
hockey.ticketPrice(vip);

