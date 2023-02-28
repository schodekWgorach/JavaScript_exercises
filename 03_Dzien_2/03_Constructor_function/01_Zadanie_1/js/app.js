//## Zadanie 1 - rozwiązywane z wykładowcą
//
// W pliku `js/app.js` stwórz konstruktor `Basket`. Na jego bazie stwórz obiekt, który będzie miał następujące pola:
// * products - tablica z wszystkimi produktami
// * sum - kwota do zapłaty za wszystkie produkty
//
// Do prototypu konstruktora dodaj metody:
// * `addProduct(name, price)`, która jako parametry będzie przyjmowała nazwę produktu oraz jego cenę. Cenę podawaj jako typ number, a nazwę jako string. Umieść te dane jako obiekt w tablicy this.products.
// * `showBasket()`, której zadaniem będzie wyświetlenie wszystkich produktów z koszyka wraz ceną, oraz kwotą do zapłaty.
//
// Przykładowe wywołanie:
//
// ```JavaScript
// const aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();
//
// const bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();
// ```

function Basket(){   //fabryka do generowania obiektów
    this.prodacts = [];
    this.sam = 0;
}

const myBasket = new Basket();
console.log(myBasket);


Basket.prototype.addProduct = function(name, price) {  // tablica do tworzenia obiektów
    const productToAdd = {
        name: name,
        price: price,

    };
    this.prodacts.push(productToAdd);
    this.sum += price;
   //console.log(this.pro);
}

Basket.prototype.showBasket = function () {
    console.log(this.prodacts, this.sum);
}

//const myBasket = new Basket();
console.log(myBasket.addProduct("pomidor",10));

//aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();