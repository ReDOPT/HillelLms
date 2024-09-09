let numOrStr = prompt('input number or string');

console.log(numOrStr)

switch (true){
    case numOrStr === null:
        console.log('ви скасували');
    case numOrStr.trim() === '':
        console.log(`Empty String `);
        break
    case isNaN(+numOrStr) :
        console.log(`number is Ba_NaN`);
    default :
        console.log(`OK!`)
}