/*## Zadanie 3

Na stronie znajduje się `select` i trzy obrazki.
Każdy z obrazków jest przypisany do jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.

Na start powinien być wyświetlony obrazek `Windows`. Następnie po wyborze innego i **zatwierdzeniu** przyciskiem `Zatwierdź` zmień wyświetlany obrazek.

*/

const form = document.querySelector('form');
const select = document.querySelector('select');
const windows = document.querySelector('[alt="Windows"]');
const mac = document.querySelector('[alt="MacOS"]');
const ubuntu = document.querySelector('[alt="Ubuntu"]');

windows.style.display = 'block';
mac.style.display = 'none';
ubuntu.style.display = 'none';

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (select.value === 'Windows') {
        windows.style.display = 'block';
        mac.style.display = 'none';
        ubuntu.style.display = 'none';
    } else if (select.value === 'MacOS') {
        windows.style.display = 'none';
        mac.style.display = 'block';
        ubuntu.style.display = 'none';
    } else if (select.value === 'Ubuntu') {
        windows.style.display = 'none';
        mac.style.display = 'none';
        ubuntu.style.display = 'block';
    }
});