/*
  Poniżej napisz kod rozwiązujący zadania
 */

/*## Zadanie 3

Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
1. Wyszukaj odpowiednie elementy (spany) i zapisz je do  zmiennych.
2. Za pomocą ```innerText``` wypełnij w nich odpowiednie informacje.

*/

const name = document.querySelector('#name');
const favColor = document.querySelector('#fav_color');
const favMeal = document.querySelector('#fav_meal');

name.innerText = 'Maksymilian Olszewski';
favColor.innerText = 'Czarny';
favMeal.innerText = 'Ziemniaki';
