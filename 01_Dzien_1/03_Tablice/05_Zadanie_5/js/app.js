//## Zadanie 5  // Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę.
// Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej
// metody tablicowej i zwrócić wynik.
// ```JavaScript
// multiply([1,2,3,4,5,6,7]) => 5040
// multiply([1,1,1,1]) => 1
// multiply([2,8,3,7]) => 336

// function multiply(array) {
//     let temp = 1;
//     for(let i = 0; i < array.length;  i++){
//
//         temp *= array[i];
//     }
//     return temp;
//
// }
// console.log(multiply ([ 1,2,3,4,5,6,7]));
// console.log (multiply([ 1,1,1,1]));
// console.log(multiply( [2,8,3,7]));

/*debugger;

function multiply(someArray) {
    const multiplyResult = someArray.reduce(function (a, b) {
        return a * b;
    });
    console.log(multiplyResult);
}

multiply([1,2,3,4,5,6,7]);*/


function add (sameArray){
    let addArray = sameArray.reduce(function (a,b) {
        return a+b ;
    })
    console.log(addArray)
}


add([1,2,3,4,5,6,7,8])