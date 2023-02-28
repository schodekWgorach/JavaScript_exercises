//## Zadanie 3
//
// Stwórz obiekt `stairs`.
//
// Niech obiekt posiada pole `step`, które na początku ustaw na 0.
//
// Dodaj do obiektu również następujące metody:
// * `up()`, która zwiększa schodek o 1 (modyfikuj pole step)
// * `down()`, która zmniejsza schodek o 1 (modyfikuj pole step)
// * `printStep()`, która pokazuje, na którym schodku jesteśmy.
//
// Przykład wywołania:
// ```JavaScript
// stairs.up();
// stairs.up();
// stairs.up();
// stairs.down();
// stairs.printStep() // 2
const stairs = {
    step: 0,
    up: function (){
        //this.step += this.step;
        this.step++

        console.log(this.step);
    },
    down: function (){
        //this.step -= this.step;
        this.step--
        console.log(this.step);
    },
    printStep: function (){
        return this.step;
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
console.log(stairs.printStep());
