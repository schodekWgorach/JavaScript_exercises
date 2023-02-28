//
// ## Zadanie 4
//
// * Znajdź na stronie element o **class**  `superFooter`
// * Stwórz funkcję ```getId(element)```, do której przekaż jako argument znaleziony element
// * pobierz w funkcji nazwę id elementu i zwróć ją
//
//

/*

const superFooter = document.querySelector('.superFooter');

//console.log(superFooter.id);

function getID(superFooter){
    console.log(superFooter.id);
};
*/

const superFooter = document.querySelector(".superFooter");


function getId(element) {
    return element.id;
}

console.log(getId(superFooter));