//
//
// ## Zadanie 2 - rozwiązywane z wykładowcą
//
// Wypisz w konsoli:
//
// 1. Ile na stronie znajduje się   elementów `div` (jest ich 20),
// 2. Ile na stronie znajduje się elementów o klasie `offers` (jest ich 12),
// 3. Ile na stronie znajduje się elementów, które posiadają atrybut `href` (jest ich 13).
//

const divs = document.querySelectorAll('div');
const offers = document.querySelector('.offers');

console.log(divs.length);
console.log(offers.length);
console.log(offers);




//offers.forEach(element => console.log(element));

//const divs = document.getElementsByTagName('div'); // będzie html colektion niema matody forEach


// query selektorno tylko po at




//// const divs = document.querySelectorAll('div');
// const divs = document.getElementsByTagName('div');
// // const offers = document.querySelectorAll('.offers');
// const offers = document.getElementsByClassName('offers');
// const hrefs = document.querySelectorAll('[href]');
//
// console.log(divs.length);
// console.log(offers.length);
// console.log(hrefs.length);