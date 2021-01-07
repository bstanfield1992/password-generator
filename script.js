// Assignment code here

// function to generate the password

function generatePassword() {
  // assign variables

  var password = "";
  var lengthOfPassword = 0;
  var numbers = "1234567890";
  var special = "~!@#$%^&*()_-+=`,./';][<>?";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var possibleChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // loop to make sure the length is both long enough and not too long.

  while (lengthOfPassword < 8 || lengthOfPassword > 128) {
    lengthOfPassword = window.prompt("Please enter how many characters the password should be.")
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      window.alert("Please enter a length between 8 and 128");
    }
  }

  // ask user what criteria they want to follow

  var withNumbers = window.confirm("Would you like numbers in your password?");
  var upperCase = window.confirm("Would you like to include upper case letters?");
  var specialC = window.confirm("Would you like to include special characters?");

  // if they want numbers in the password add them to the possible characters array

  if (withNumbers) {
    for(var i = 0; i < numbers.length; i++) {
      possibleChar.push(numbers[i])
    }
  }

  // if they want upper case letters add to the possible characters array

  if (upperCase) {
    for(var i = 0; i < upper.length; i++) {
      possibleChar.push(upper[i])
    }
  }

  // if they want special characters then add to possible characters array

  if (specialC) {
    for(var i = 0; i < special.length; i++) {
      possibleChar.push(special[i])
    }
  }

  // assemble password based on 
for (var i = 0; i < lengthOfPassword; i++) {
  var r = Math.floor(Math.random() * possibleChar.length);
  password = password + possibleChar[r];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
