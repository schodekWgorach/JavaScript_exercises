//## Zadanie 1 - rozwiązywane z wykładowcą
//
// Przetestuj działanie `setTimeout` i `setInterval`.
//
// Uruchom interwał, który co `10s` będzie wyświetlał napis "Wygenerowano z setInterval"
// w konsoli. A także timer, który po `4s` wypisze w konsoli: "JavaScript Rules".

debugger;

const interval = setInterval(function () {
    console.log('Wygenerowano z setInterval');
}, 10000);
const timeout = setTimeout(function () {
    console.log('JavaScript Rules');
}, 4000);

// settimeout przyjmuje dwa argumenty (pierwszy argument to funkcja, czas w milisekundach)

