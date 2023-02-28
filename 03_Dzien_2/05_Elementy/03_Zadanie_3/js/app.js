//
// ## Zadanie 3
//
// Wypisz w konsoli wartość ```innerText``` dla elementów zmiennej ```blocks```. Następnie ustaw wartość
//     ```innerText``` na "Nowa wartość diva o klasie blocks".

    const blocks = document.querySelectorAll(".block");

console.log(blocks);

blocks.forEach(function (singleBlock){
    console.log(singleBlock.innerText);
    singleBlock.innerText = "q";
})
//blocks.innerText;