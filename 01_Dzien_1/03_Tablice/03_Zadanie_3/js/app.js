//## Zadanie 3
//
// Zajrzyj do pliku `js/app.js`. Jest tam przykładowa funkcja,
// która tworzy tablicę z liczbami. Niestety nie działa ona dobrze.
// Znajdź błąd i napraw go, tak żeby funkcja działała.



function createArray(number) {
  const newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;


}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

