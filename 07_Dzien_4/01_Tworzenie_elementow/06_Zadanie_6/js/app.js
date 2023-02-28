/*
## Zadanie 6

Na stronie znajdują się dwie listy. Każdy z wpisów jest "klikalny".

Napisz taki kod JavaScript, żeby po kliknięciu danego elementu listy, został on przeniesiony na drugą listę.

Pamiętaj, że element może być przenoszony wiele razy (np. z listy 1 do listy 2, a potem z powrotem do listy 1).

*/
const list1Elements = document.querySelectorAll('#list1 a');
const list2Elements = document.querySelectorAll('#list2 a');
const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');

function onItemMove() {
    const clonedItem = this.cloneNode(true);
    if (this.parentElement.id === 'list1') {
        list2.appendChild(clonedItem);
    } else {
        list1.appendChild(clonedItem);
    }
    this.parentElement.removeChild(this);
    clonedItem.addEventListener('click', onItemMove);
}

list1Elements.forEach(function (item) {
    item.addEventListener('click', onItemMove);
});

list2Elements.forEach(function (item) {
    item.addEventListener('click', onItemMove);
});