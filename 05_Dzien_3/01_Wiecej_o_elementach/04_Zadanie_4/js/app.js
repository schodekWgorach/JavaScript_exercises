/*
  Poniżej napisz kod rozwiązujący zadania
 */

//*
// ## Zadanie 4
//
// Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany.
// Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
// 1. Wyszukaj element `ul` w sekcji `.exercise` i dodaj mu klasę `menu`.
// 2. Wyszukaj wszystkie elementy `li` w sekcji `.exercise` i dodaj im klasę
// ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
// 3. Zauważ, że jeden z elementów ma czerwony kolor tła. Jest to spowodowane
// tym, że ma **klasę** ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz
// tę **klasę** wszystkim elementom, które ją mają).*/.err


const ul = document.querySelector('.exercise ul');
ul.classList.add('menu');

const lis = document.querySelectorAll('.exercise li');
lis.forEach(function (item) {
    item.classList.add('menuElement');
});

const errorElements = document.querySelectorAll('.error');
errorElements.forEach(function (item) {
    item.classList.remove('error');
})