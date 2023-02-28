/*
## Zadanie 2

Przeanalizuj kod HTML i JavaScript. W pliku `js/app.js` jest przygotowane kilka zmiennych,
 w których zapisane są wyszukane elementy DOM.
Wypisz w konsoli wszystkie te zmienne. Sprawdź, które z nich to pseudotablice.
W przypadku pseudotablic przeiteruj (używając np. pętli **for**).
Wypisz nazwę tagu oraz klasy dla każdego elementu.*/


const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

//
// console.log(home);
// console.log(children);
// console.log(ban);
// console.log(someBlocks);
// console.log(listElements);

children.forEach(function (item){
    console.log("klasa", item.className);  // wyswietlamy tylko nazwy klas
    console.log("tag", item.tagName); // wyswietlamy classy
});







// children.forEach(function (element){
//     console.log();
//
//
// })
//
//
//
//
//
// function getDataInfo(selectors) {
//     return Array.from(selectors).map(function (item) {
//         return item.dataset;
//     });
// }
//
// console.log(getDataInfo(home));
// console.log(getDataInfo(children));
// console.log(getDataInfo(ban));
// console.log(getDataInfo(someBlocks));
// console.log(getDataInfo(listElements));


//
// console.log(home);
// console.log(children);
// console.log(ban);
// console.log(someBlocks);
// console.log(listElements);



//pseudo tablice //nodelist html-colection

