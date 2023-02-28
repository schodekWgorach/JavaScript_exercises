//## Zadanie 3
//
// W pliku `js/app.js` jest stworzona tablica obiektów `planets`.
//
// Znajduje się w niej 8 planet Układu Słonecznego wraz z informacjami ile posiadają księżyców.
//
// Napisz funkcję ```sortPlanet(planets)```, której zadaniem będzie **zwrócenie** nowej,
// posortowanej wg. ilości księżyców, tablicy. Czyli od Jowisza do Wenus.
//
// Posortowaną tablicę wypisz w konsoli.

debugger;

const planets = [
  {
    name: "Merkury",
    numberOfMoons: 0
  },
  {
    name: "Wenus",
    numberOfMoons: 0
  },
  {
    name: "Ziemia",
    numberOfMoons: 1
  },
  {
    name: "Mars",
    numberOfMoons: 2
  },
  {
    name: "Jowisz",
    numberOfMoons: 63
  },
  {
    name: "Saturn",
    numberOfMoons: 60
  },
  {
    name: "Uran",
    numberOfMoons: 27
  },
  {
    name: "Neptun",
    numberOfMoons: 13
  }
];


function sortPlanet (){
  return planets.sort (function (a, b) {
    return a.numberOfMoons - b.numberOfMoons;
  });

}
console.log(sortPlanet());


//sort  w obektach property

// //
// function sortArray(array) {
//   const sortedArray = array.sort(function (a, b) {
//     return a - b;
//   });
//   return sortedArray;
// }
//
// console.log(sortArray([145,11,3,64,4,6,10]));