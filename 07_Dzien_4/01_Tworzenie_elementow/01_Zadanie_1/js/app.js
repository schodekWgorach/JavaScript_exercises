/*
## Zadanie 1 - rozwiązywane z wykładowcą

Na stronie znajduje się tabela z zamówieniami. Przy każdym zamówieniu znajduje się przycisk,
 który służy do usuwania tego zamówienia.
Dopisz do niego odpowiedni event, który spowoduje, że dane zamówienie zniknie z tablicy.
Spróbuj zrobić to w taki sposób, żeby wszystkie przyciski korzystały z tego samego eventu (użyj ```this```).

*/

const buttons = document.querySelectorAll('.deleteBtn');

buttons.forEach(function (singleButton) {
    singleButton.addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    });
});