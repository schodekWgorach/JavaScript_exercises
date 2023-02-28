/*
  Poniżej napisz kod rozwiązujący zadania
 */
//
/*
## Zadanie 2

Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
    Napisz kod JavaScript, który wprowadzi następujące zmiany:

1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo
     (obrazek jest nastawiany za pomocą ```background-image```).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

// tylko jedna kropka bo w tym miejscu w którym jest i wejdz
// do folderu dlatego że jesteśmy teraz w index.html

*/


const chromeLogo = document.querySelector('.chrome');
const edgeLogo = document.querySelector('.edge');
const firefoxLogo = document.querySelector('.firefox');
const cards = document.querySelectorAll('.card');
const chromeCardLink = cards[0].querySelector('a');
const edgeCardLink = cards[1].querySelector('a');
const firefoxCardLink = cards[2].querySelector('a');

edgeLogo.style.backgroundImage = "url(./img/edge.jpg)";
firefoxLogo.style.backgroundImage = "url(./img/firefox.jpg)";

chromeCardLink.innerText = "Chrome";
edgeCardLink.setAttribute('href', 'https://www.microsoft.com/pl-pl/edge');
firefoxCardLink.innerText = "Firefox";
firefoxCardLink.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');

chromeLogo.style.width = '100px';