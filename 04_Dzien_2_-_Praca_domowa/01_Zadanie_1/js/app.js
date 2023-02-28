//
//
// ## Zadanie 1
//
// W pliku ```app.js```  za pomocą konstruktora stwórz funkcję ```Tree```.
// Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
//     Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.
//
//     Dopisz do prototypu konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I am blooming".

//
// dis. tape
//
// stworzyć 3 obiekty slówko kluczowe new
//     sztywny string


//
// app.js
// za pomocą kontruktora stwórz funkcję
// Tree Niech funkcja ta ma jedną właściwość
// type
//     , która będzie przechowywać typ drzewa.
//     // Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.
//
//     // Dopisz do prototypu konstruktora również metodę
//     bloom()
//     , która będzie zwracała tekst "I am blooming".
//

function Tree(type) {
    this.type = type;
}

Tree.prototype.bloom = function() {
    console.log('I am a', this.type, ' I am blooming.');
}

let tree1 = new Tree ('sosna');
let tree2 = new Tree  ('wierzba');

console.log(tree1);
console.log(tree2);

tree1.bloom();
tree2.bloom();


