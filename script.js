// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set functions that are later called
function generatePassword() {
  var passlength = prompt("What length would you like the password to be?(amount of characters)");
  if (passlength < 8) {
    alert("Length must be at least 8 characters");
  }
  if (passlength > 128) {
    alert("Length must be no more than 128 characters");
  }
  if (isNaN(passlength)) {
    alert("Must be a number");
  }

  var charactertype1 = confirm("Would you like to include lowercase characters?");
  var charactertype2 = confirm("Would you like to include uppercase characters?");
  var charactertype3 = confirm("Would you like to include numbers?");
  var charactertype4 = confirm("Would you like to include special characters?");
  console.log(charactertype);



  console.log(passlength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);