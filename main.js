let number = [ 4,6,10,7,]

function myCounter(){
    let counter =0;
    let i = 0
    return function (){

        counter += number[i];
        i ++

        console.log (counter);
    }
}
const counter = myCounter();

counter();
counter();
counter();
counter();