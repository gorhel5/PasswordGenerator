const passwordField = document.querySelector('.password-field');
const passInput = document.querySelector('.password-field__input');
const lengthItem = document.querySelector('.length-item');
const lengthRange = document.querySelector('.length-range');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const btnGenerate = document.querySelector('.btn-generate');
const btnCopy = document.querySelector('.btn-copy');

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
    passInput.value = password;

});

btnCopy.addEventListener('click', () => {
    passInput.select();
    passInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passInput.value);
})
