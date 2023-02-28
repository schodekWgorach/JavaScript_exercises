//## Zadanie 5
//
// Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis.
// Obiekt powinien mieć własność `title` (string),
// `servings` (number) oraz `ingredients` (tablica stringów).
//
// Dodaj pole `ingredients` poza ciałem obiektu.
//
// Wypisz w konsoli te wszystkie informacje.

const  recipe = {
    title: 'supe',
    servings: 23,
};

recipe.ingredients = ['onion', 'carrot', 'potatoes'];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);