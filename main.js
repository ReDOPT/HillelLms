let ladder = {
    stepNumber : 0 ,
    up: function () { // підніматиме вас на одну сходинку
        this.stepNumber++;
        return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.stepNumber--;
        return this;
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.stepNumber)
        return this;
    }
};
ladder.up().up().up().down().showStep()
