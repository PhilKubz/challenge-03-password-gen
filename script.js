// Variables set globally to be used for password creation
var passLength = 8;
var choiceArray = [];
var specialCharArray = ['!', '@', '#', '$','%', '^','&', '*', '(', ')', '/', '/', '<', '>', '?'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArray = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];

// set the #generate element in the DOM to have button functionality in JS
var generateBtn = document.querySelector("#generate");


// This function gathers user input on what to include/exclude for the new password
function getPrompts(){
  choiceArray = [];

  // Check to create the length for desired new password to be generated
  passLength = parseInt(prompt("What length would you like the password to be? (8 - 128 characters)"));
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Must be a number between 8 - 128 characters. Try Again.");
  // A return false is included so that if the character requirement is not met, the function ends
    return false;
  }

  // Check to include/exclude lowercase
 if (confirm("Would you like to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  // Check to include/exclude lowercase
  if (confirm("Would you like to include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  // Check to include/exclude numbers
  if (confirm("Would you like to include numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  // Check to include/exclude special characters
  if (confirm("Would you like to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }

  // The return true is included to show (especially in console) the function was run correctly
  return true;
}

// generatePassword will gather information that we store in choiceArray to be used for password generation
function generatePassword() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomCharacter];
  }
  return password;
}


// writePassword will gather data from correctPrompts/user input to run generatePassword
// This will then be used to set the passwordText as the newPassword we generate
function writePassword() {
  var CorrectPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(CorrectPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}



// Event listener for the generate password button
generateBtn.addEventListener("click", writePassword);