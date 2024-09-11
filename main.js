let n = prompt(`number N`)
let result = n

for (let i = 1; i <=n; i++){
    result  = result*n
    if ( result <= 100 && result % 2 === 0 ){
        console.log(result)
    }
}

console.log()

let squareOfTheNumber = n*=n
for ( let i=1 ; i<=squareOfTheNumber ; i++ ){
    if ( i<= 100 && i%2 === 0 ){
        console.log(i)
    }
}