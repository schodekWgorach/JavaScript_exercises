//## Zadanie 4
//
// Stwórz obiekt `person`. Dopisz do niego następujące właściwości i metodę:
// * `name`,
// * `age`,
// * `sayHello()` - wypisującą string "hello"
// Wypisz właściwości w konsoli, wywołaj metodę.

const person = {
    name: "Adam",
    age: 23,
    sayHello: function(){
        //console.log('Hello')
        return 'hello'
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.sayHello()); //(person.sayHello())
