// let
//
// length
//
// nazwa tablicy index 0 pierwszy element  jest podobny do
//
//     pentle < for
// ostatni element
//
// //
// // if length
// ## Zadanie 2
//
// Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
//
// 1. Wypisz pierwszy owoc w konsoli.
// 1. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
// 1. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).



const fruit = ["Apple", "Orange" ,"Mango", "Ananas"];
console.log(fruit[0]); // zad 1
console.log(fruit[fruit.length - 1]); //zad 2

// const count = fruit.length
// console.log(fruit[count - 1]); //zad 2

/*for (let i = 0; i < fruit.length; i++) {
    let owoc = fruit[i];
    console.log(" " + owoc )
}*/
for(let i=0 ; i<fruit.length;i++ ){
    let owoc = fruit[i];
    console.log( ' * ' + owoc);

}









