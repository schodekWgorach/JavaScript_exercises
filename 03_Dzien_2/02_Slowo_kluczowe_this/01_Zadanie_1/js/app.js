//
// ## Zadanie 1 - rozwiązywane z wykładowcą
//
// Stwórz obiekt `car`, utwórz dla niego odpowiednie właściwości i metody.
//
// ### Właściwości:
// * `brand`,
// * `color`,
// * `numberOfKilometers` (na początku **0**).
//
// ### Metody:
//     * `printCarinfo()` - metoda powinna wypisywać informacje o samochodzie
//     (kolor, markę i liczbę przejechanych kilometrów).
// * `drive(km)` - która dodaje do przejechanych kilometrów podaną wartość.
// Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
//     ```JavaScript
// car.printCarinfo(); => "Czarny Mercedes, 0km"
// car.drive(20);
// car.printCarinfo(); => "Czerny mercedes, 20km"
// ```
//

//
const car = {
    brand: 'Honda Prelude',
    color: 'Grey',
    numberOfKilometers: 0
};
car.printCarInfo = function () {
    return `${this.color} ${this.brand}, ${this.numberOfKilometers}km` ;  //${this.reviews}
}
car.drive = function (km) {
    this.numberOfKilometers += km;
}
car.reviews = [];
car.addReview = function (newReview) {
    this.reviews.push(newReview);
}
car.printReview = function () {
    return this.reviews;
}
car.reviews = [' 11/02/2023 ',' 23/04/2021 '];

prompt(car.reviews, 'car reviews are up');


car.printCarInfo(); //=> "Czarny Mercedes, 0km"
car.drive(20);
alert(car.printCarInfo());
car.drive(40);
alert(car.printCarInfo());


// ## Zadanie do samodzielnego wykonania
//
// Do obiektu `car` z dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).
//
// Dodaj też następujące metody:
//     1. metodę dodającą wpis do tej tablicy,
//     2. metodę zwracającą wszystkie przeglądy samochodu.
//
//     Użyj słowa kluczowego `this`, żeby odwołać się do obiektu w środku metody.