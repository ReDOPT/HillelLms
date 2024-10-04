const numbers = [1231, 122, 233, 34, 45, 64, 27, 2348, 249, 210];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);