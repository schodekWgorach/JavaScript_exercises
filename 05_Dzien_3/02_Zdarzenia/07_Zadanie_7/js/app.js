/*## Zadanie 7

Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się element `div` o id `box`.

 Napisz **dla niego** event, który będzie wypisywał położenie kursora myszy w chwili,
  gdy znajduje się nad tym elementem.

Wyszukaj zarówno położenie kursora globalne (czyli odległość od górnego lewego rogu okna),
 jak i lokalne (czyli odległość od lewego górnego rogu elementu).

*/
const box = document.querySelector('#box');
const globalX = document.querySelector('#globalX');
const globalY = document.querySelector('#globalY');
const localX = document.querySelector('#localX');
const localY = document.querySelector('#localY');

box.addEventListener('mousemove', function (event) {
    globalX.innerText = `${event.clientX}px`;
    globalY.innerText = `${event.clientY}px`;
    localX.innerText = `${event.offsetX}px`;
    localY.innerText = `${event.offsetY}px`;
});