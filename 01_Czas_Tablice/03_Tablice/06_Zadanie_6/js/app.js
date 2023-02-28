//## Zadanie 6
//
// Napisz funkcję ```getEvenAverage```, która ma przyjmować tylko jeden argument - tablicę.
// Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy.
// Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
// Jeśli w tablicy nie ma parzystych liczb niech zwraca null.
//
// ```JavaScript
// getEvenAverage([1,2,3,4,5,6,7]) => 4
// getEvenAverage([1,1,1,1]) => null
// getEvenAverage([2,8,3,7,4]) => 4.666
// ```

//filter służy do przefiltrowania tablicy


function getEvenAverage(someArray) {
    // v1 - .forEach()
    // const evenArray = [];
    // someArray.forEach(function (item) {
    //    if (item % 2 === 0) {
    //        console.log(`Parzysta liczba: ${item}`);
    //        evenArray.push(item);
    //    }
    // });

    // v2 - .filter()
    const evenArray = someArray.filter(function (item) {
        return item % 2 === 0;
    });

    if (evenArray.length === 0) {
        return null;
    } else {
        const evenArraySum = evenArray.reduce(function (a, b) {
            return a + b;
        });
        const evenArrayLength = evenArray.length;
        const evenArrayAverage = evenArraySum / evenArrayLength;
        return evenArrayAverage;
    }
}

console.log(getEvenAverage([3,4,6,7,8,9,12]));
console.log(getEvenAverage([1,1,1,1]));