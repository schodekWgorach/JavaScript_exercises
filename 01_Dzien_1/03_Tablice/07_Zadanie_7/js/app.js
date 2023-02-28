
// ## Zadanie 7
// Napisz funkcję ```sortArray```, która ma przyjmować tylko jeden argument -
// tablicę zawierającą  liczby całkowite. Funkcja ta ma zwracać posortowaną rosnąco tablicę.
// Możesz skorzystać z metod tablicowych.
//     ```JavaScript
// sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
// ```


function sortArray(array) {
    const sortedArray = array.sort(function (a, b) {
        return a - b;
    });
    return sortedArray;
}

console.log(sortArray([145,11,3,64,4,6,10])); //się od siebie jeśli jest mniejszy od zera jeśli
// jest wynik większy od zera to znaczy ze pierwsza jest większa