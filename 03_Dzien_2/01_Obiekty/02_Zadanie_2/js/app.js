//## Zadanie 2 - rozwiązywane z wykładowcą
//
// Stwórz obiekt `timeMachine`. Dopisz do niego następujące właściwości:
//
// * `shape` - string,
// * `model` - string,
// * `run(date, place)` - metoda, dzięki której można się przenieść w czasie. Argument `date` to data, do jakiej chcemy się przenieść, a `place` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi.
//
// Wypisz w konsoli wszystkie właściwości i uruchom metodę `run`.


const timeMachine = {
    shape: 'oval',
    model: 'nice model',
    run: function (date, place) {
        return (`traveling to ${place} on time ${date}`);
    }

};

console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run('23.11.2022','poznan'));