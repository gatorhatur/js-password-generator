// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
    length: 7,
    lower_case: false,
    upper_case: false,
    numbers: false,
    sp_char: false,
    minCriteria: function(){
      if(!this.lower_case && !this.upper_case && !this.numbers && !this.sp_char ){
        return false;
      }
      else{
        return true;
      }
    }
};

console.log(passwordCriteria);

var generatePassword = function() {
  //prompt user for complexity options to user
  while(passwordCriteria.length < 8){
    passwordCriteria.length = window.prompt("How long would you like your password to be? Choose a number between 8 and 128.");
  }

  while(!passwordCriteria.minCriteria()){
  window.alert("Passwords must use at least one of the criteria. You will be asked these questions again if you click cancel, to all");
  passwordCriteria.lower_case = window.confirm("Would you like to use lower case letters?");
  passwordCriteria.upper_case = window.confirm("Woudl you like to use upper case letters?");
  passwordCriteria.numbers = window.confirm("Would you like to include numbers?");
  passwordCriteria.sp_char = window.confirm("Would you like to use special characters? ex. ?,/,-,*,#,@,$");
  }



  //based on options and password length randomly choose how many of each character type goes into password

  //generate random characters (consider an object that contains that different options), hav methods to help select

  //push all into an array and randomize

  return password;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
