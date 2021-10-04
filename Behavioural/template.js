// I think below should be abstract, maybe in typescript
class Day {
    wakeUp() {
        console.log('Wake up, brush, bath, breakfast');
    }
    sleep() {
        console.log('Dim Lights, summarize the day, visualize tomorrow, sleep');
    }
    meditate() {
        console.log('Observe disorders, dwell on it, give your full energy, observe attentively. Later, observe choicelessly');
    }
    exercise() {
        console.log('Book a class, invite friends, enjoy');
    }
    start() {}
}
class WorkDay extends Day {
    coding() {
        console.log('Review past, plan for today, start to code');
    }
    start() {
        this.wakeUp();
        this.coding();
        this.exercise();
        this.meditate();
        this.sleep();
    }
}
class Weekend extends Day {
    exploreOutside() {
        console.log('Call friends, inform maa, check petrol, wear helmet, check weather, happy exploring');
    }
    start() {
        this.wakeUp();
        this.exploreOutside();
        this.exercise();
        this.meditate();
        this.sleep();
    }
}
const day1 = new WorkDay();
const day2 = new Weekend();
day1.start();
day2.start();