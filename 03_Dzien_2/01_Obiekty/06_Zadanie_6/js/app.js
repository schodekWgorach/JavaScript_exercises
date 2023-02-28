//## Zadanie 6
//
// Do pliku ```js/app.js``` przekopiuj poniższy kod:
//
// ```js
// const spoon = {
//   isExist: true
// }
//
// const fork = spoon;
// fork.isExist  = false;
// ```
//
// Następnie sprawdź czy łyżka istnieje.

const spoon = {
  isExist: true
}

const fork = spoon;
fork.isExist  = false;

console.log(spoon);  //nie istnieje poniewzaż jest referencyjny i został wykasowany
