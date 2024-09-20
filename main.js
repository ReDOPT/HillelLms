function myCounter() {
    let counter =0;
    let i = 0
    return function (number){

        counter += number;
        i ++

        console.log (counter);
    }
}
const counter = myCounter();

counter(4);
counter(6);
counter(10);
counter(7);