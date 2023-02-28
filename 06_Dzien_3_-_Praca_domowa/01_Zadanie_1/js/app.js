

/*const btnPrimary = document.querySelector('.btn-primary');
const btnSuccess = document.querySelector('.btn-success');

function toggleClass () {
    this.nextElementSibling.classList.toggle('d-none');
}

btnPrimary.addEventListener('click', toggleClass);

btnSuccess.addEventListener('mouseenter',toggleClass);

btnSuccess.addEventListener('mouseout', toggleClass);*/

/*
## Zadanie 1

Na stronie znajduje się sekcja z dwoma elementami ```article```.
W każdym artykule znajdują się elementy `h2`,
 `a` oraz `div` o klasie `content`, który jest ukryty w CSS (klasa `d-none`).

Twoim zadaniem jest:

* ustawienie na pierwszym linku eventu, który spowoduje,
 że kiedy użytkownik w niego kliknie pokaże się element o klasie
  `content` (należący do tego artykułu).


* ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego
najedzie pokaże się element o klasie `content` (należący do tego artykułu).
*/
const cards = document.querySelectorAll(".card-body");
console.log(cards);
const btnPrimary = cards[0].querySelector("a");
console.log(btnPrimary);
const btnSuccess = cards[1].querySelector("a");
console.log(btnSuccess);


btnPrimary.addEventListener("click", () => {
    cards[0].querySelector(".content").classList.toggle("d-none");
});
btnSuccess.addEventListener("mouseover", () => {
    cards[1].querySelector(".content").classList.toggle("d-none");
});


