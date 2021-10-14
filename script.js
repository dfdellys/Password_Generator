// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

var el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}
//Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  // character arrays

  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

  // empty array

  var resultChar = [];
  var userChar = [];

  uppercaseChar[1];

  var userLength = prompt('How long should the password be? Choose between 8 and 128?');
  var numbers = confirm('Include numbers?');
  var upperCase = confirm('Include uppercase characters?');
  var lowerCase = confirm('Include lowercase characters?');
  var special = confirm('Include special characters?');

  // condition of the array

  if (numbers) {
    resultChar = resultChar.concat(numberChar);
  }

  if (upperCase) {
    resultChar = resultChar.concat(uppercaseChar);
  }

  if (lowerCase) {
    resultChar = resultChar.concat(lowercaseChar);
  }

  if (special) {
    resultChar = resultChar.concat(specialChar);
  }
  console.log(resultChar);

  for (var i = 0; i < userLength; i++) {
    userChar.push(resultChar[Math.floor(Math.random() * resultChar.length)]);
  }

  return userChar.join('');
}
