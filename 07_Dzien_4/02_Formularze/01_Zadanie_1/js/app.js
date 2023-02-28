const form = document.querySelector('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const agree = document.getElementById('agree');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isEmailValid = email.value.includes('@');
    const isNameValid = name.value.length > 2;
    const isSurnameValid = surname.value.length > 2;
    const isPasswordValid = pass1.value === pass2.value && pass1.value.length !== 0 && pass2.value.length !== 0;
    const isAgreeValid = agree.checked;

    if (isEmailValid) {
        console.log('Wszystko okej');
    } else {
        errorMessage.innerText += 'Email musi posiadać znak @ \n';
        errorMessage.classList.remove('d-none');
    }

    if (isNameValid) {
        console.log('Wszystko okej');
    } else {
        errorMessage.innerText += 'Twoje imię jest za krótkie \n';
        errorMessage.classList.remove('d-none');
    }

    if (isSurnameValid) {
        console.log('Wszystko okej');
    } else {
        errorMessage.innerText += 'Twoje nazwisko jest za krótkie \n';
        errorMessage.classList.remove('d-none');
    }

    if (isPasswordValid) {
        console.log('Wszystko okej');
    } else {
        errorMessage.innerText += 'Hasła nie są takie same lub puste \n';
        errorMessage.classList.remove('d-none');
    }

    if (isAgreeValid) {
        console.log('Wszystko okej');
    } else {
        errorMessage.innerText += 'Musisz zaakceptować warunki \n';
        errorMessage.classList.remove('d-none');
    }

    if (isEmailValid && isNameValid && isSurnameValid && isPasswordValid && isAgreeValid) {
        successMessage.innerText = 'Formularz wysłany!';
        successMessage.classList.remove('d-none');

        email.value = '';
        name.value = '';
        surname.value = '';
        pass1.value = '';
        pass2.value = '';
        agree.checked = false;
    }
});