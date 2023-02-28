/*## Zadanie 5

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i trzy liczniki
(elementy ```span``` o klasie ```counter```). Do każdego przycisku dopisz event, który spowoduje,
że po kliknięciu w przycisk przypisany do niego licznik zwiększy swoją wartość o jeden.

*/
const buttons = document.querySelectorAll('.btn');
const counters = document.querySelectorAll('.counter');

buttons.forEach(function (item, index) {
    let counterValue = 0;
    item.addEventListener('click', function () {
        counterValue++;
        counters[index].innerText = counterValue;
    });
});








