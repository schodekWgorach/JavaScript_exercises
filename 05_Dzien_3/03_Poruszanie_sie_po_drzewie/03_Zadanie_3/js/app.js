/*
## Zadanie 3

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki).
 Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

*/

const buttons = document.querySelectorAll('.btn');


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});

/*

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {

        //this.previousElementSibling.classList.toggle('hidden');

        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.style.backgroundColor(randomColor);
    });
});*/
