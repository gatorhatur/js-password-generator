// Assignment Code
var generateBtn = document.querySelector("#generate");


//issues with the getCharCounts
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
    },
    getCharCounts: function() {
      var count = 0;
      var CharCounts = [];
      var len_track = this.length;
      console.log("len_track = " + len_track);

      if(this.lower_case){
        CharCounts.push({name: "lower",count:0}); 
        count++;
      };
      if(this.upper_case){ 
        CharCounts.push({name: "upper",count:0});
        count++;
      };
      if(this.numbers){
        CharCounts.push({name: "number",count:0});
        count++;
      };
      if(this.sp_char){
        CharCounts.push({name: "special",count:0});
        count++;
      };
      //console.log(CharCounts);

      for(var i = 0; i < count; i++){
        if(i === count-1){
          console.log("Hit the final count");
          CharCounts[i].count = len_track;
        }
        else{
        var t = Math.floor(Math.random() * len_track * .7);
        if(t > this.length/2){t = Math.round(t/2);};
        CharCounts[i].count = t ;
        len_track -= t;
        console.log("i = " + i + "  and len_track = " + len_track);
        }
      }
//need to resolve issue with finding 0s
      CharCounts.forEach(function (arrayItem){
        if(arrayItem.count < 1){
          console.log("One of the counts was 0, trying again!");
          
          CharCounts = passwordCriteria.getCharCounts();
        }
      });
      
        return CharCounts;
            
    }
};

var passwordHelper = {
  sp_char_list: ["?","/","-","*","#","@","$"],
  alpha_offset: 97,
  getAlpha: function(upper){
    if(upper){
      return String.fromCharCode(Math.floor(Math.random() * 26 + this.alpha_offset)).toUpperCase();
    }
    else{
      return String.fromCharCode(Math.random() * 26 + this.alpha_offset);
    }
  },
  getNumber: function(){
    return Math.floor(Math.random() * 10);
  },
  getSpChar: function(){
    return this.sp_char_list[Math.floor(Math.random() * (this.sp_char_list.length))];
  }
};

var scramble = function(charArray){
  //user fisher yates method to randomize the string order
  //https://www.w3schools.com/js/js_array_sort.asp
  console.log(charArray);
  for(var i = charArray.length-1; i > 0; i--){
    var j = Math.floor(Math.random() * i);
    var k = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = k;
  }
  console.log(charArray.length);
  console.log(charArray);

  var password = charArray.join("");
  console.log(password.length);
  console.log(password);
  //console.log("Length before replace is " + password.length)
  //console.log(password.join());
  return password;
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
  var characterCount = passwordCriteria.getCharCounts();
  var password = [];
  
  characterCount.forEach(function(object){
    switch(object.name){
      case "lower":
        for(var i = 0;i < object.count;i++){
          password.push(passwordHelper.getAlpha(false));
        }
        break;
      case "upper":
        for(var i = 0;i < object.count;i++){
          password.push(passwordHelper.getAlpha(true));
        }
        break;
      case "number":
        for(var i = 0;i < object.count;i++){
          password.push(passwordHelper.getNumber());
        }
        break;
      default:
        for(var i = 0;i < object.count;i++){
          password.push(passwordHelper.getSpChar());
        }
    }
  });


  console.log("Password before being send to scambler " + password);

  //generate random characters (consider an object that contains that different options), hav methods to help select

  //push all into an array and randomize

  return scramble(password);

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
