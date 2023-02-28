/*
## Zadanie 3

Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się przycisk.
Podepnij do niego event, który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".
*/

const button = document.getElementById("mainBtn");
console.log(button);
button.addEventListener("click", function(){
    console.log("Hura! Działa!");
});

