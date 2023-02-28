/*
## Zadanie 1 - rozwiązywane z wykładowcą

Zajrzyj do pliku `js/app.js` i przetestuj działanie obu funkcji.
Dlaczego funkcja o nazwie `firstFunc` nie ma dostępu do zmiennej o nazwie `otherInt`?

*/

function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
    console.log(otherInt);
  }

  secondFunc();
}

firstFunc();