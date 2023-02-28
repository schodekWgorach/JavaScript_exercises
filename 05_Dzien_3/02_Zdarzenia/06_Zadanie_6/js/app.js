// ## Zadanie 6
//
// Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy elementy ```div```.
// Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym **divie**.
// Użyj do tego słowa kluczowego ```this```.
//
// **Hint**:
// Żeby uzyskać losowy kolor użyj poniższego kodu:
//     ```JavaScript
// const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// ```

const boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });
});


/* krzyśka
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const div = document.querySelectorAll('.box');

div.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = randomColor;
    });
});*/
/**/