// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  //prompt user for complexity options to user

  //based on options and password length randomly choose how many of each character type goes into password

  //generate random characters (consider an object that contains that different options), hav methods to help select

  //push all into an array and randomize

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
