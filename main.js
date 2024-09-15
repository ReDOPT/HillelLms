const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array,number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            delete array[i] ;
        }
    }
    return array;
}

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]