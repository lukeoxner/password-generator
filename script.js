// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare variables in global memory to store user choices for password attributes
var lowCase;
var upCase;
var number;
var special;
var pwLength;







// Write password to the #password input
function writePassword() {
  var password = generatePassword();    // generates password and stores it in variable 'password'
  var passwordText = document.querySelector("#password"); // selects the textarea element with id 'password' and assigns it as the value of the variable 'passwordText'

  passwordText.value = password;  // declares the value of passwordText variable equals the value of password variable

}

// Add event listener to generate button
// When user clicks this button, we execute the function writePassword
generateBtn.addEventListener("click", writePassword);



function generatePassword () {
  return 'its a password';
}