/*## Zadanie 3

W pliku `js/app.js` stwórz funkcję, która będzie wypisywała w konsoli tekst "Cześć". Przetestuj miejsce wywoływania tej funkcji.

Najpierw wywołaj ją po definicji funkcji, a później przed. W komentarzu zapisz swoje spostrzeżenia.
Następnie stwórz drugą funkcję, która będzie wypisywała w konsoli inny tekst np. "Witaj". Stwórz ją jako
wyrażenie funkcyjne (czyli przypisz definicję do zmiennej).

Następnie spróbuj przetestować w podobny sposób jak pierwszą funkcję, miejsce jej wywołania. W komentarzu zapisz swoje spostrzeżenia.

*/


firstFunc();

function firstFunc() {
    console.log('Pierwsza funkcja');
}

firstFunc();


const secondFunc = function () {
    console.log('Druga funkcja');
}

secondFunc();