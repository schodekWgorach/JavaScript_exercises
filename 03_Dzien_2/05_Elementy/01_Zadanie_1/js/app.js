// //
// ## Zadanie 1 - rozwiązywane z wykładowcą
//
// * Stwórz funkcję `getDataInfo(elements)`, do której przekaż jako argument zmienną `links`
// (pamiętaj o tym, że jest to pseudotablica)
// * stwórz w funkcji nową tablicę i wypełnij ją wartościami
// pobranymi z atrybutu **data** każdego elementu li
// * zwróć tą tablicę.
//


//getDataInfo

//
//     const links = document.querySelector(".links").querySelectorAll("li");
//
//
// function getDataInfo(elements) {
//     const colors = [];
//     elements.forEach(function (item){
//         //console.log(item.dataset.color);
//         colors.push(item.dataset.color);
//     });
//     //console.log(elements[0].dataset.color);
//     console.log(colors);
// };
//
// getDataInfo(getDataInfo(links));

// tablice z pseudotablicy

//
//
// console.log(Array.from(elements)) // const cloors = array.from(elements).map(0 tworzenie tablicy z pseudotabicy
// console.log([...elements]); //ES6 sprateforom() operator


const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {

    // v1 - .forEach()
    // const colors = [];
    // elements.forEach(function (item) {
    //     colors.push(item.dataset.color);
    // });

    // v2 - .map()
    return Array.from(elements).map(function (item) {
        return item.dataset.color;
    });
}

console.log(getDataInfo(links));