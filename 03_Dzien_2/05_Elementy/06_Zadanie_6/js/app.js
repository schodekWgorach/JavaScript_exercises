/*

## Zadanie 6

* Stwórz funkcję ```getClassInfo(element)```, do której przekaż jako argument zmienną ```banner```
*  zwróć tablicę z listą klas, pobraną z przekazanego do funkcji argumentu.

*/

const banner = document.querySelector(".ban");

function getClassInfo(element) {
    return [...element.classList];
}

console.log(getClassInfo(banner));

