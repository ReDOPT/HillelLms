let n = prompt(`number N`)

if (n===null || n===``){
    console.log(`Hажаль вы не надали число N`)
}

console.log(n)

for ( let i=1 ; i<=n ; i++ ){
    let x=i*i
    if ( x <= n && i <=100 ){
        console.log(i)
    }
}