// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare variables in global memory
var password;
var pwLength;
var lowCase;
var upCase;
var numbers;
var special;

// these strings contain all possible characters that can be used in making the password
var lowCaseString = 'abcdefghijklmnopqrstuvwxyz';
var upCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersString = '1234567890';
var specialString = '!@#$%^&*()_+';


// define parent function that contains the functions that let user set parameters for password
function userInput() {
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
  // define parent function for all the individual character type confirmation functions
  function confirmAll() {
    // define function that gets user input to confirm using lowercase
    function confirmLowCase() {
      lowCase = confirm('Would you like to use lowercase letters?');
      }

    // define function that gets user input to confirm using uppercase
    function confirmUpCase() {
      upCase = confirm('Would you like to use uppercase letters?');
    }

    // define function that gets user input to confirm using numbers
    function confirmNumbers () {
      numbers = confirm('Would you like to use numbers?');
    }

    // define function that gets user input to confirm using special characters
    function confirmSpecial() {
      special = confirm('Would you like to use special characters?');
    }

    // execute the four functions defined above
    confirmLowCase();
    confirmUpCase();
    confirmNumbers();
    confirmSpecial();

    // validate user input to ensure at least one data type is selected
    if (lowCase === false
      && upCase === false
      && numbers === false
      && special === false) {
        alert('You must select at least one data type for your password.');
        confirmAll();
    } else {
      return;
    }
  }
  // execute functions defined above
  getLength();
  confirmAll();
}

// execute the userInput function to set password attributes
userInput();

// make string of possible password values based on user input
var passwordPossibles = ((lowCase) ? lowCaseString : '')
  + ((upCase) ? upCaseString : '')
  + ((numbers) ? numbersString : '')
  + ((special) ? specialString : '');

  // define the function that uses a for loop to generate a random password from the possible characters defined above
function generatePassword() {
  for (var i = 0; i < pwLength; i++)
  password = password + passwordPossibles.charAt(Math.floor(Math.random() * passwordPossibles.length));
}

// define parent function that is executed when the user clicks the Generate Password button
function writePassword() {
  password = '';
  generatePassword();
  var passwordText = document.querySelector("#password"); // selects the textarea element with id 'password' and assigns it as the value of the variable 'passwordText'

  passwordText.value = password;  // sets the value of passwordText variable equal to the value of password variable so it can be printed for the user

}

// Add event listener to generate button
// When user clicks this button, we execute the function writePassword
generateBtn.addEventListener("click", writePassword);



 // PSEUDOCODE NOTES SECTION

// Prompt user to choose password attributes              DONE
  // ATTRIBUTES
    // 1) Length of password prompt                       DONE
    // 2) Contains lowercase? confirm                     DONE
    // 3) Contains uppercase? confirm                     DONE
    // 4) Contains numbers? confirm                       DONE
    // 5) Contains special characters? confirm            DONE

  // VALIDATIONS
    // 1) Password length at least 8, no more that 128    DONE
    // 2) User must pick at least 1 of the 4 types of characters    DONE
      // If either of these is not met,  notify user why and restart the prompts    DONE

// Store their choices in variables as boolean types    DONE

// Generate arrays for each of the four password data types     DONE

// Use generatePassword function to make the password using user input for attributes   DONE