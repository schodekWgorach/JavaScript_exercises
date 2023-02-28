/*## Zadanie 3

Na stronie przypisanej do zadania znajduje się lista i przycisk.
Dopisz odpowiednie eventy do nich w taki sposób,
żeby po kliknięciu w przycisk dodał się nowy element do listy.

Element powinien mieć w sobie informacje na temat tego,
 ile elementów jest w liście w chwili jego dodania.
*/

const button = document.getElementById('add');
const ul = document.getElementById('menu');

button.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = `Element ${ul.children.length + 1} - w chwili dodania było ${ul.children.length} elementów`;
    li.classList.add('list-group-item');

    ul.appendChild(li);
});