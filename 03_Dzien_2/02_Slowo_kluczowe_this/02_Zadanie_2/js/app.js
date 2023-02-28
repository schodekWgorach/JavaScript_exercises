/*
## Zadanie 2

Przeanalizuj kod, który znajduje się w pliku `js/app.js`.

Jest tam stworzony obiekt ```calculator```, który posiada jedną metodę `save(newA,newB)`
. Zadaniem tej metody jest zapisanie dla tego obiektu pod pola `a` i `b` dwóch liczb.

Dopisz metody `sum` oraz `multiply`, tak aby zwracały sumę oraz iloczyn tych dwóch
liczb ustawionych w metodzie `save`.


*/



const calculator = {
  save: function (newA, newB) {
    this.a = newA;
    this.b = newB;
  },
  sum: function (){
         return this.a + this.b;
  },
  multiply: function (newA, newB){
    return this.a * this.b;
    // let multi = newA * newB;
    // return multi;
  }
};

calculator.save(12, 13);
console.log(calculator.sum(12,13));
console.log(calculator.multiply(10,10));

