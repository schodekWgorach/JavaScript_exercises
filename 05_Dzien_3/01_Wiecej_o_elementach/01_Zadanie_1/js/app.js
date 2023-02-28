const exercises = document.querySelectorAll('.exercise li');

exercises.forEach(function (element, index) {
    if (index % 2 === 0) {
        element.style.backgroundColor = "#9e9e9e";
    }
    if (index === 4) {
        element.classList.add('big');
    }
    if (index % 3 === 0) {
        element.style.textDecoration = 'underline';
    }
});