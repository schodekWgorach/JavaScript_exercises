/*## Zadanie 1 - rozwiązywane z wykładowcą

Napisz funkcję ```distFromAverage```, która ma przyjmować tylko jeden argument - tablicę.
Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki
a średnią wartością tablicy.
Np.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

*/


function distFromAverage(array) {
    const arrayLength = array.length;
    const arraySum = array.reduce(function (total, item) {
        return total + item;
    });
    const arrayAverage = arraySum / arrayLength;

    // v1 - .forEach()
    // const resultArray = [];
    // array.forEach(function (item, index, array) {
    //     resultArray.push(Math.abs(item - arrayAverage))
    // });

    // v2 - .map()
    const resultArray = array.map(function (item, index, array) {
        return Math.abs(item - arrayAverage);
    })

    return resultArray;
}

console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7, 9]));
