2
/*
  Poniżej napisz kod rozwiązujący zadania
 */

const elements = document.querySelectorAll('.exercise li');
elements.forEach(function (element, index) {
    element.setAttribute('data-id', index + 1);
});