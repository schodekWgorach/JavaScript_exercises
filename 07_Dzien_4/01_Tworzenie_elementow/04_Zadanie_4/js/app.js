/*

## Zadanie 4

Na stronie znajduje się tabela z informacjami na temat zamówień (z dwoma już wprowadzonymi zamówieniami).
Poniżej znajduje się formularz do wypełnienia nowego zamówienia.
 Napisz event, który pobierze informacje z inputów (```el.value```) i wprowadzi nowy wpis do tabeli.

*/
const button = document.getElementById('add');
const orderId = document.getElementById('orderId');
const item = document.getElementById('item');
const quantity = document.getElementById('quantity');
const tbody = document.querySelector('tbody');

button.addEventListener('click', function () {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.innerText = orderId.value;
    td2.innerText = item.value;
    td3.innerText = quantity.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);

    orderId.value = '';
    item.value = '';
    quantity.value = '';
});