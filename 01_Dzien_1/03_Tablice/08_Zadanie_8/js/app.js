// forEach urzyć
//
//
// ## Zadanie 8
//
// Napisz funkcję ```addArrays```, która ma przyjmować dwa argumenty - dwie tablice
// zawierające  liczby całkowite.( inagers ) Funkcja ta ma zwracać również tablicę,
// która będzie wynikiem dodawania każdego elementu o tym samym indeksie. Jeżeli,
// tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.
//
//     ```JavaScript
// addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
// addArrays([8,3,22], [1,3,2]) => [9,6,24]
// addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]

//debugger;

let array1 = [4,0,1,3,4];
let array2 = [1,9,6,7,8,17];

console.log(array1);

function addArrays(array1,array2) {
    let mixArray = [];
    const ar1 = array1.length
    const ar2 = array2.length
    console.log(ar1);
    console.log(ar1);
}


//
//     if (ar1 > ar2) {
//         mixArray = array1;
//     } else {
//         mixArray = array2;
//     }
//
//      = mixArray;
//
//
//
//
//  //   mixArray.forEach((item, index) => document.write("1" + index + " " + item + " "));
//     console.log(mixArray);
// };
//
//
//
//
// //console.log(addArrays(array1,array2));
//


// var lat = [
//     [45.4668729, 44.8013268, 45.4384958],
// ];
// var lng = [
//     [9.1907501, 10.3278351, 10.9924122],
// ];
//
// var nerArr = ["A","B","C"]
//
//
// var finalArray = []
//
// lat[0].forEach((i, index)=>{
//     finalArray.push([i, lng[0][index], nerArr[index] ])
// })
//
// console.log(finalArray)