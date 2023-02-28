/*
## Zadanie 4

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i jeden licznik.
Napisz jeden wspólny event dla wszystkich przycisków, który spowoduje,
że po kliknięciu w przycisk licznik zwiększy wartość o jeden.
1


*/

const counterElement = document.querySelector('.counter');
const buttonElements = document.querySelectorAll('.btn');

let counterValue = 0;

buttonElements.forEach(function(singleButton) {
    singleButton.addEventListener('click', function () {
        counterValue++;
        counterElement.innerText = counterValue;
    });
});



