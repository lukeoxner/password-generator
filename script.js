// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare variables in global memory to store user choices for password attributes

var pwLength;
var lowCase;
var upCase;
var number;
var special;

 
  // prompt user for desired password length and validate for number between 8 and 128
  function getLength() {
    pwLength = prompt('How many characters do you want your password to be? \r\n(must be between 8 and 128)');
    if (pwLength >= 8 && pwLength <= 128) {
      return pwLength;
    } else {
      alert('Please specify a length between 8 and 128.');
      getLength();
    }
  }

  // get user input for using lowercase
  function confirmLowCase() {
    lowCase = confirm('Would you like to use lowercase letters?');
    }



getLength();
confirmLowCase();



// testing my code with console.log
console.log(pwLength);
console.log(lowCase);








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
  return 'its a password';    // tester code (temporary)
}




// Prompt user to choose password attributes
  // ATTRIBUTES
    // 1) Length of password prompt
    // 2) Contains lowercase? confirm
    // 3) Contains uppercase? confirm
    // 4) Contains numbers? confirm
    // 5) Contains special characters? confirm

  // VALIDATIONS
    // 1) Password length at least 8, no more that 128
    // 2) User must pick at least 1 of the 4 types of characters
      // If either of these is not met,  notify user why and restart the prompts

// Store their choices in variables as boolean types





// Use generatePassword function to make the password using user input for attributes