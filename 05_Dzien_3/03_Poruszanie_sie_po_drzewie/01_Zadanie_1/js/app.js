/*
## Zadanie 1 - rozwiązywane z wykładowcą

Znajdź i zapisz do zmiennych następujące elementy:
1. Element o **klasie** ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o **atrybucie** ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek ->
jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko
 (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
4. **Div** o **klasie** ```forth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article```
-> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.

*/


const firstResult = document.querySelector('.first').firstElementChild.children[2];
console.log(firstResult);

const secondResult = document.querySelector('#second').parentElement.children[3];
console.log(secondResult);

const thirdParentElement = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild;
const thirdResult = thirdParentElement.children[Math.floor(thirdParentElement.children.length / 2)];
console.log(thirdResult);

const forthResult = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1];
console.log(forthResult);