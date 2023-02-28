/*
## Zadanie 2

Na stronie znajduje się przycisk. Musisz dopisać do niego event w taki sposób,
żeby po kliknięciu w niego został usunięty ze strony.
*/




const button = document.querySelector('.btn');

console.log(button);

button.addEventListener('click', function () {
    const li = document.createElement(li);
    li.innerText =
    console.log(li);
    //this.parentElement.removeChild(this);
});
/*
buttons.forEach(function (singleButton) {
    singleButton.addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    });
});*/
