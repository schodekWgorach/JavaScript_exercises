/*## Zadanie 3

Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
1. Element o **id** ```home``` (na dwa sposoby).
2. Pierwszy element **li** posiadający atrybut ```data-direction```.
3. Pierwszy element o **klasie** ```block```.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Pamiętaj, żeby używać funkcji, które wyszukują tylko jeden element.
tylko jeden element.
*/

const home =document.getElementById("home");
const firstList = document.getElementsByTagName("li[data-direction]");
const firstBlock = document.querySelector('.block');

console.log(home);
console.log(firstList);
console.log(firstBlock);