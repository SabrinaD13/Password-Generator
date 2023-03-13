// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //returns true of false
  var promptsTrue = promptsSelected();
  var passwordText = document.querySelector("#password");

if(promptsTrue) {
  var updatedPassword = generatePassword();
  passwordText.value = updatedPassword;
} else {
  passwordTest.value = ""; 
}
}

//Generates the password based off selected prompts
function generatePassword() {
  var password = "";
for(var i = 0; i < passwordLength; i++){
  var randomChar = Math.floor(Math.random() * characters.length);
  password = password + characters[randomChar];
}
return password;
}

//Makes sure the prompts selected are in the generated password
function promptsSelected() {
  characters = [];

  //Determines the length of password
passwordLength = parseInt(prompt("Pick a password between 8 and 128 characters"));

//Determines if a length was entered correctly as a number between 8-128
if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
  alert("Password must be a number between 8 and 128 characters.")
  return false ;
}


//confirms if lowerCase letters will be used in the password generated.
if (confirm("Do you want to include lower case letters in your password?")) {
  characters = characters.concat(lowerCaseChar);
}


//confirms if upperCase letters will be used in the password generated.
if (confirm("Do you want to include upper case letters in your password?")) {
  characters = characters.concat(upperCaseChar);
}


//confirms if numbers will be used in the password generated.
if (confirm("Do you want to include numbers in your password?")) {
  characters = characters.concat(numbersChar);
}


//confirms if symbols will be used in the password generated.
if (confirm("Do you want to inculde symbols in your password?")) {
  characters = characters.concat(symbolsChar);
}

return true;
}

// Posible characters to be generated in random password
var characters = [];
const lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbolsChar = ['!', '@', '#', '$', '%', '&', '*', '<', '>', '?', '='];

