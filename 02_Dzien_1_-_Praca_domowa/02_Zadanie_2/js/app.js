// .forEach albo .filter //## Zadanie 2
// Napisz funkcję `addTheSameNumbers`, która ma przyjmować dwa argumenty: liczbę i tablicę.
// Funkcja ta ma zwracać sumę wszystkich elementów tablicy, które są równe
// liczbie podanej jako pierwszy argument funkcji.
// Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć `null`.
// ```JavaScript
// addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
// addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
// addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
// addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null

// function addTheSameNumbers(number, array) {
//
//
// }

function addTheSameNumbers(number, array) {
    const bar = array.filter(function (element) {
        return element === number;
    });
    if (bar.length === 0) {
        return null;
    } else {
        return bar.length * number;
    }
}
console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));



//
// const result = number.filter(addTheSameNumbers);
//
// function addTheSameNumbers(number, array) {
//     return number = number;
// }
//
// console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
// console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
// console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
// console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));
//
//
//



//function addTheSameNumbers   (number,array){
//        let sum = null;
//         for(let i = 0; i < array.length; i++){
//             if(number == array[i]){
//                 sum += array[i];
//             }
//         }
//         if(sum==null)
//             return null;
//         return sum;
//
//
// }
// console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
// console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
// console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ));
// console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));