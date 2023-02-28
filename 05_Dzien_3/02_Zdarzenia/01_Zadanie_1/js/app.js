/*
## Zadanie 1 - rozwiązywane z wykładowcą

Uruchom stronę `index.html`.  Na stronie znajdują się dwa elementy o klasach ```parent``` i ```children```
Stwórz event, który po najechaniu na element ```parent``` pokaże element ```children```. Zauważ, że element ```children``` ma ustawiony display: none w css.
Stwórz drugi event, który po zjechaniu z elementów schowa z powrotem element ```children```.
Pamiętaj o tym, aby nie chować wszystkich elementów naraz.

*/


const parents = document.querySelectorAll('.parent');
//console.log(parents);

parents.forEach(function (item){

    item.addEventListener('mouseover',function (){
        //console.log(parent);
        const child = item.querySelector('.children');
        //console.log('chaild');
        child.style.display = 'block';
    });
    item.addEventListener('mauseout', function (){
        const child = item.querySelector('.children'); // zjeżdzamy z kursora
        child.style.display = 'none';
    });
});

/*parents.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        const child = item.querySelector('.children');
        child.style.display = 'block';
    });

    item.addEventListener('mouseout', function () {
        const child = item.querySelector('.children');
        child.style.display = 'none';
    });
});*/