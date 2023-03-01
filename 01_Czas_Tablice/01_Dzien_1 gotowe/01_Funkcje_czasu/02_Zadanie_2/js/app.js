/*## Zadanie 2

Napisz funkcję `countHello()`, która jako parametr przyjmie liczbę całkowitą od 1 do 10.
W funkcji uruchom funkcję `setInterval`.

Jego zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz licznika, zliczającego,
który raz już został uruchomiony `setInterval`.
Jeśli licznik osiągnie wartość podaną do funkcji jako parametr,
powinien zostać usunięty `setInterval`.

*/
function countHello(iterator) {
    let counter = 1;
    const intervalID = setInterval(function () {
        if (counter > iterator*5) {
            clearInterval(intervalID);
        } else {
            console.log('Hello == ' + counter + " ==  kolejna liczba  == " + counter*counter );
            counter++;
        }
    }, 1000);
}

countHello(12);
