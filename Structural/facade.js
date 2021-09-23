// hiding complexities

class Meditate {
    startMeditation() {
        console.log("Find deeper aspects of life by choiceless observation");
    }
    stopMeditation() {
        console.log("Observer watchfully, attentive everything, choices come into thoughtful actions");
    }
}

class Exercise {
    startExercise() {
        console.log("Book a cult class and inform friends about it, attend it");
    }
    stopExercise() {
        console.log("Small talk with friends, have a bath, reach home");
    }
}

class Coding {
    startCoding() {
        console.log("Clear, well defined, time bound goals, achieve them");
    }
    stopCoding() {
        console.log("Quick revise once, give a moment to sink in everything, leave workplace");
    }
}

class Sleep {
    startSleep() {
        console.log("Summarize the day, visualize tomorrow, apply cream, take a blanket and sleep");
    }
    stopSleep() {
        console.log("Get up, Brush, 10 push ups, spend sometime with oneself");
    }
}

class PlayGuitar {
    startGuitar() {
        console.log("Tune guitar, play something that randomly pops off, involve Maa and sister, enjoy the music");
    }
    stopGuitar() {
        console.log("Remove Kepo, plug pluck into strings, keep it safe so it doesn't topple");
    }
}

class StartDay {
    constructor(meditate, coding, exercise, guitar, sleep) {
        this.meditate = meditate;
        this.coding = coding;
        this.exercise = exercise;
        this.guitar = guitar;
        this.sleep = sleep;
    }
    startDay() {
        this.coding.startCoding();
        this.exercise.startExercise();
        this.meditate.startMeditation();
        console.log("----------------------------------------");
    }
    stopEverything() {
        this.coding.stopCoding();
        this.exercise.stopExercise();
        this.meditate.stopMeditation();
        console.log("-----------------------------------------");
    }
    breakdown() {
        this.stopEverything();
        this.guitar.startGuitar();
        setTimeout(() => {
            this.sleep.startSleep();
        }, 1000);
    }
}

const meditate = new Meditate();
const coding = new Coding();
const exercise = new Exercise();
const sleep = new Sleep();
const playGuitar = new PlayGuitar();

const day = new StartDay(meditate, coding, exercise, playGuitar, sleep);
day.startDay();
setTimeout(() => {
    day.breakdown();
}, 5000);

