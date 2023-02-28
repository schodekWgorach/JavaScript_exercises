/*Zadanie 2
Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

1. Pobranie informacji z atrybutu data
znajdź element o id menu,
stwórz funkcję getDataInfo(element) do której przekaż, jako argument, znaleziony element,
stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data-info każdego elementu li. Zauważ, że elementy li to dzieci elementu o id menu.
zwróć tę tablicę.

2. Szukanie elementu po id
Znajdź element o id main-container.
stwórz funkcję getElementClass(element) do której przekaż, jako argument, znaleziony element.
zwróć tablicę złożoną z nazw klas tego elementu.

3. Szukanie elementu po klasie
Znajdź element o klasie pink-color.
stwórz funkcję getElementText(element) do której przekaż, jako argument, znalezione elementy.
zwróć z funkcji tekst, znajdujący się w tym elemencie.

4. Szukanie elementu po klasie
Znajdź elementy o klasie images.
stwórz funkcję getElementAlt(element) do której przekaż, jako argument, znalezione elementy.
stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków.
Pobierz te atrybuty z przekazanych jako argument elementów.

5. Szukanie elementu po klasie
Znajdź elementy o klasie my-link.
stwórz funkcję getElementHref(element) do której przekaż, jako argument, znalezione elementy.
stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków.
 Pobierz te atrybuty z przekazanych jako argument elementów.*/

/*======================================================================================*/

const element1 = document.getElementById("menu");
function getDataInfo(element) {
    return [...element.children].map((item) => {
        return item.dataset.info;
    });
}
console.log(getDataInfo(element1));

// 2
const element2 = document.getElementById("main-container");
// console.log(element2);
function getElementClass(element) {
    return [...element.classList];
}
console.log(getElementClass(element2));

// 3
const element3 = document.querySelector(".pink-color");
// console.log(element3);
function getElementText(element) {
    return element.innerText;
}
console.log(getElementText(element3));

// 4
const element4 = document.querySelectorAll(".images");
// console.log(element4);
function getElementAlt(element) {
    return [...element].map((item) => {
        return item.alt;
    });
}
console.log(getElementAlt(element4));

// 5
const element5 = document.querySelectorAll(".my-link");
// console.log(element5);
function getElementHref(element) {
    return [...element].map((item) => {
        return item.href;
    });
}
console.log(getElementHref(element5));

/*======================================================================================*/