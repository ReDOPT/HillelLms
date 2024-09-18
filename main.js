function sum (firstNumber){
    return function(secondnumber){
        return firstNumber * secondnumber
    }
}

console.log(sum(3)(5))