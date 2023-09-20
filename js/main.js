const passwordField = document.querySelector('.password-field');
const lengthItem = document.querySelector('.length-item');
const lengthRange = document.querySelector('.length-range');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const btnGenerate = document.querySelector('.btn');

let charsNumbers = '0123456789';
let charsSymbols = '@#$%^&*()[]';

lengthItem.addEventListener('input', () => {
    lengthRange.value = lengthItem.value

}); 
lengthRange.addEventListener('input', () => { 
    lengthItem.value = lengthRange.value;

});

btnGenerate.addEventListener('click', () => {
    let password = '';
    let charsLettes = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    if (numbers.checked) {
        charsLettes += charsNumbers;
    }
    if (symbols.checked) {
        charsLettes += charsSymbols;
    }

    for (let i = 0; i < lengthItem.value; i++) {
        password += charsLettes[Math.floor(Math.random() * charsLettes.length)];
       
    }
    passwordField.innerHTML = password;

});

// function copyText () {
//     passwordField.select();
//     document.execCommand('copy');
// }