// Generates the button for the "Generator Password".
var generateBtn = document.querySelector("#generate");

// Applied the function to generate a password and let the console know it's being clicked.
function generatePassword();
console.log(availableCharacters); {
  console.log("Generate password button has been clicked.")

  // Controls the prompts for length of password.
 var length = prompt("Pick a password between 8 and 128 characters");
  if(length > 128 || length < 8 || isNaN(length)){
    alert("Password must be a number between 8 and 128 characters.")
    generatePassword();
  }
 console.log(length)

 
 //confirms if lowerCase letters will be used in the password generated.
var lowerCase = confirm("Do you want to include lower case letters in your password?")
console.log(lowerCase)

//confirms if upperCase letters will be used in the password generated.
var upperCase = confirm("Do you want to include upper case letters in your password?")
console.log(upperCase)

//confirms if numbers will be used in the password generated.
var numbersWanted = confirm("Do you want to include numbers in your password?")
console.log(numbersWanted)

//confirms if symbols will be used in the password generated.
var symbolsWanted = confirm("Do you want to inculde symbols in your password?")
console.log(symbolsWanted)

// Displays password to the page.
  return "Generated Password";
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//What will create a generated password when confirmed certain characters were selected.
const keys = {
 lowercaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
 symbols: ['!', '@', '#', '$', '%', '&', '*', '<', '>', '?', '=', '+', '-'],
}

//Validated input; selecting at least one random charcter from each if selected.
const getKey = [
  function uppercaseLetters() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowercaseLetters() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function numbers() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbols() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

// When generator button is clicked this will generate the write password function.
generateBtn.addEventListener("click", writePassword);
