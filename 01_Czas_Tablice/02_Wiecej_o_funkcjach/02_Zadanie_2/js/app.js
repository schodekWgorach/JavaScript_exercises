//## Zadanie 2
//
// Zajrzyj do pliku `js/app.js` i przetestuj działanie funkcji `callOtherFunction`.
// Następnie spróbuj wywołać ją jeszcze kilka razy przekazując jej inne działanie do zrobienia.


function callOtherFunction(nameOfFunction) {
  console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

  const randomNumber1 = Math.random() * 20;
  const randomNumber2 = Math.random() * 10;
  nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
  console.log("Pierwsza liczba:", a);
  console.log("Druga liczba", b);
  console.log("Wynik", a + b);
  console.log("to ja twoja funkcja "+ (a * b));
});



callOtherFunction(function (a){
  console.log("Pierwsza liczba:", (a));
});