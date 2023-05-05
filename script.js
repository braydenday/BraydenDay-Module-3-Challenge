// // Assignment code here

// DOM elements
var passwordElement = document.getElementById('password');
var lengthElement = document.getElementById('length');
var uppercaseElement = document.getElementById('uppercase');
var lowercaseElement = document.getElementById('lowercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var generateElement = document.getElementById('generate');

document.addEventListener("DOMContentLoaded", () => {
  lengthElement.value = 8;
  lengthElement.innerText = 8;

  let onLoadLength = lengthElement.value;
  let onLoadUppers = uppercaseElement.checked;
  let onLoadLowers = lowercaseElement.checked;
  let onLoadNumbers = numbersElement.checked;
  let onLoadSymbols = symbolsElement.checked;
  passwordElement.value = generatePassword(onLoadUppers, onLoadLowers, onLoadNumbers, onLoadSymbols, onLoadLength);
});
// Listen for password range change 
lengthElement.addEventListener("change", (event) => {
  lengthElement.innerText = event.target.value;
});
// this function will check if the boxes are checked and the length value is within the 8 to 128 characters
generateElement.addEventListener("click", () => {
  var length = lengthElement.value;
  var uppers = uppercaseElement.checked;
  var lowers = lowercaseElement.checked;
  var numbers = numbersElement.checked;
  var symbols = symbolsElement.checked;
  passwordElement.value = generatePassword(uppers, lowers, numbers, symbols, length);
});
// this function will run the code and give your password on the screen based on what you checked
function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  let variationsCount = [upper, lower, number, symbol].length;

  for (let i = 0; i < length; i += variationsCount) {
    if (lower) {
      generatedPassword += getRandomLower();
    }
    if (upper) {
      generatedPassword += getRandomUpper();
    }
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    generatePassword();
  }
  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// functions .... grab from arrays instead of charcode
// generates random lower case letter. math.random * 26 will give you a decimal for the 26 letters in the alphabet.. math.random wrapped in math.floor gives a random whole number. 97-122 gives us the lower case letters in the Char Code so +97
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// generates random upper case letter. same function as randomLower but uppercase A starts at 65 in the Char code so +65 in this function 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// generates random number. same functions as above but 0 starts at 48 and 9 is 57 and we only need 1 through 9
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// generates random symbol through the length of the symbols const
function getRandomSymbol() {
  var symbols = '!@#$%^&*()_+-={}[]|/,.<>';
  return symbols[Math.floor(Math.random() * symbols.length)];
}