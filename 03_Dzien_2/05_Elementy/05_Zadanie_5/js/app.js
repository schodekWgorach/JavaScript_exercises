/*
## Zadanie 5

* Stwórz funkcję ```getTags(elements)```, do której przekaż jako argument zmienną ```childElements```
(pamiętaj o tym, że jest to pseudotablica)
* stwórz w funkcji nową tablicę i wypełnij ją nazwami tagów pobranymi z elementów znajdujących się w ```childElements```
* zwróć tą tablicę.


*/

const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");
function getTags(elements) {
    return Array.from(elements).map(function (item) {
        return item.tagName;
    });

}

console.log(getTags(childElements));



