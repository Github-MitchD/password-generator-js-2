const result = document.querySelector("#result");
const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeUppercase = document.querySelector("#uppercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const copyPass = document.querySelector("#copy");

// Set default password length 8 max on load
document.addEventListener("DOMContentLoaded", () => {
    passLength.value = 8;
    passLengthResult.innerText = 8;

    let onLoadLength = passLength.value;
    let onLoadUppercase = includeUppercase.checked;
    let onLoadNumbers = includeNumbers.checked;
    let onLoadSymbols = includeSymbols.checked;
    // result.value = generatePassword(onLoadUppercase, onLoadNumbers, onLoadSymbols, onLoadLength);
});

// Listen for password range change
passLength.addEventListener("change", (event) => {
    passLengthResult.innerText = event.target.value;
});

// Listen for copy button
copyPass.addEventListener("click", () => {
    copy(result.value);
});

generateBtn.addEventListener("click", () => {
    const length = passLength.value;
    const uppercase = includeUppercase.checked;
    const numbers = includeNumbers.checked;
    const symbols = includeSymbols.checked;
    result.value = generatePassword(uppercase, numbers, symbols, length);
});

function generatePassword(uppercase, number, symbol, length) {
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        if (uppercase) {
            generatedPassword += getRandomUpper();
        }
        if (number) {
            generatedPassword += getRandomNumber();
        }
        if (symbol) {
            generatedPassword += getRandomSymbol();
        }
        generatedPassword += getRandomLower();
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    return characters[Math.floor(Math.random() * characters.length)];    
}

function getRandomUpper() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Copy generated password in more secure way
function copy(text) {
    const input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    let copiedResult = document.execCommand("copy");
    document.body.removeChild(input);

    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.textContent = "Mot de passe copié !";
    document.body.appendChild(alert);

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
        document.body.removeChild(alert);
    }, 1500);
    return result;
}