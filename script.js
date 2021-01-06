// Assignment code here

function generatePassword() {
  var password = "password not generated";
  var lengthOfPassword = 0;

  while (lengthOfPassword < 8 || lengthOfPassword > 128) {
    lengthOfPassword = window.prompt("Please enter how many characters the password should be.")
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      window.alert("Please enter a length between 8 and 128");
    }
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
