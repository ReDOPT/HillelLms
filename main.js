let n = prompt(`number N`)

let squareOfTheNumber = n*=n
console.log(squareOfTheNumber)
console.log()

for ( let i=1 ; i<=squareOfTheNumber ; i++ ){
    if ( i<= 100 && i%2 === 0 ){
        console.log(i)
    }
}