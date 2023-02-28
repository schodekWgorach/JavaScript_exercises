// forEach albo includes

// ## Zadanie 1
//
// Napisz funkcję `getNumber`, która ma przyjmować dwa argumenty: liczbę i tablicę.
// Funkcja ta ma zwracać wartość `true` lub `false`, w zależności od tego czy
// podana liczba znajduje się w tablicy czy nie.
//
//     ```JavaScript
// getNumber(2, [33, 54, 2, 1, 4, 100]) => true
// getNumber(5, [33, 54, 2, 1, 4, 100] ) => false

/*

function getNumber(number, array) {
    return array.includes(number);
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));
*/


function getNumber(number,array){
    return array.includes(number);
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100])); //=> true
console.log(getNumber(5, [33, 54, 2, 1, 4, 100])); //=> false








