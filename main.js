let userAge = prompt("enter a age");
let userCity = prompt("enter a city");
let userSport = prompt("your favorite sport");



if (userAge == null ) {
    console.log(`It’s a pity that you didn’t want to enter your age`);
}else {
    console.log(`your age ${2024-userAge}`)
}

if (userCity == null ) {
    console.log(`It’s a pity that you didn’t want to enter your city`);
}else if ( userCity === `Kiev`){
    console.log(`you live in the capital Ukraine`)
}else if ( userCity === `Washington`){
    console.log(`you live in the capital USA`)
}else if ( userCity === `London`){
    console.log(`you live in the capital England`)
}else{
    console.log(`do you live in the city ${userCity}`)
}

if(userSport == null){
    console.log(`It’s a pity that they didn’t want to introduce your favorite sport`)
}else if (userSport=== `football`){
    console.log(`Cool! Do you want Karim Benzema?`)
}else if(userSport===`basketball`){
    console.log(`Cool! Would you like Michael Jordan?`)
}else if(userSport===`Cool! Do you want Jaromir Jagr?`){
    console.log(`hockey ${userSport}`)
}else {
    console.log(`wonderful sport ${userSport}`)
}