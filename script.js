// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passComponents = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  specialcharacters: "!@#$%^&*()_-+=<>/?[]{}\~`:;",
};

// Set functions that are later called
function generatePassword() {
  var randompassword = "";

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

  var lowercase = confirm("Would you like to include lowercase characters?");
  if (lowercase) {
    randompassword += passComponents.lowercase;
  };

  var uppercase = confirm("Would you like to include uppercase characters?");
  if (uppercase) {
    randompassword += passComponents.uppercase;
  };

  var numbers = confirm("Would you like to include numbers?");
  if (numbers) {
    randompassword += passComponents.number;
  };

  var specialcharacters = confirm("Would you like to include special characters?");
  if (specialcharacters) {
    randompassword += passComponents.specialcharacters;
  };

  for (let i = 0; i < length; i++) {
    password += randompassword[Math.floor(Math.random() * randompassword.length)]
  }
}



// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);