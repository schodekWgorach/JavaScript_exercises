/*
## Zadanie 2 - rozwiązywane z wykładowcą

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu któregokolwiek z nich –
element, który znajduje się bezpośrednio nad nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był
niewidoczny). Rozwiązanie musi spełniać następujące założenia:

    1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia `this`.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się `null`).

*/


const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        this.previousElementSibling.classList.toggle('hidden');
    });
});