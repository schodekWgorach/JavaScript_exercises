//Napisz funkcję `countHello()`, która jako parametr przyjmie liczbę całkowitą od 1 do 10.
//
// W funkcji uruchom funkcję `setInterval`.
//
// Jego zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz licznika, zliczającego,
// który raz już został uruchomiony `setInterval`.
// Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty `setInterval`.

/*
debugger;

let count = 0;
const x = 5;
let i = 0;

function countHello(x){
        if (i < x) {
            let interval = setInterval(function () {
                console.log('Hello'); }, 5000);
             } else {
            console.log(interval);
           clearInterval(interval)
        }
}
console.log(interval);
*/



// function countHello(itereitor){
//     setInterval( function (){
//         console.log("hello " + itereitor)
//     },1000);
// }
//
// countHello(5);


//
// function countHello(itereitor){
//     let counter = 1;
//     setInterval( function (){
//         if (counter === itereitor){
//             consol.log("powineinnm skonczyć funkcje");
//         } else {
//             console.log("hello " + counter)
//             counter++;
//
//             // counter +=1;
//             //counter = counter + 1
//         }
//
//     },1000);
// }
//
// countHello(5);


// function countHello(itereitor){
//     let counter = 1;
//     setInterval( function (){
//         if (counter > itereitor){
//             // consol.log("powineinnm skonczyć funkcje");
//             clearInterval(intervalID);
//         } else {
//             console.log("hello " + counter);
//             counter++;
//
//             // counter +=1;
//             //counter = counter + 1
//         }
//
//     },1000);
// }
//
// countHello(5);


countHello(8);
function countHello(iterator) {
    let counter = 1;
    const intervalID = setInterval(function () {
        if (counter > iterator) {
            clearInterval(intervalID);
            consol.log("powineinnm skonczyć funkcje");
        } else {
            console.log('Hello ' + counter);
            counter++;
        }
    }, 1000);
}

