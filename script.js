// Assignment code here

function generatePassword() {
  var password = "";
  var lengthOfPassword = 0;
  var numbers = "1234567890";
  var special = "~!@#$%^&*()_-+=`,./';][<>?";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var possibleChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  while (lengthOfPassword < 8 || lengthOfPassword > 128) {
    lengthOfPassword = window.prompt("Please enter how many characters the password should be.")
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      window.alert("Please enter a length between 8 and 128");
    }
  }

  var withNumbers = window.confirm("Would you like numbers in your password?");
  var upperCase = window.confirm("Would you like to include upper case letters?");
  var specialC = window.confirm("Would you like to include special characters?");

  if (withNumbers) {
    for(var i = 0; i < numbers.length; i++) {
      possibleChar.push(numbers[i])
    }
  }

  if (upperCase) {
    for(var i = 0; i < upper.length; i++) {
      possibleChar.push(upper[i])
    }
  }

  if (specialC) {
    for(var i = 0; i < special.length; i++) {
      possibleChar.push(special[i])
    }
  }

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
