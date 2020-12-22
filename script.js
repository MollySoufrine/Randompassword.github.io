// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

alert(
  "Password must be a minimum of 8 characters and maximum or 128 characters"
);

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // booleans to store answers from the participant
  var hasSpecialCharacters = confirm(
    "click OK if you would like to include a special character"
  );

  var hasUpperCasedCharacters = confirm(
    "click OK if you would like to include an uppercase character"
  );

  var hasLowerCasedCharacters = confirm(
    "click OK if you would like to include a lowercasecharacter"
  );
  var hasNumericCharacters = confirm(
    "click OK if you would like to include a numeric character"
  );
  //conditional statement to check if any special characetrs were selected.
  if (
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false
  ) {
    alert("password must contain atleast one character");
  }
  // Conditional statement to check if password length is a number as well as greater than 8 and less than 128

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var result = [];
  var options = getPasswordOptions();
  console.log(options);

  var possibleCharacters = [];

  var finalCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    finalCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    finalCharacters.push(getRandom(numericCharacters));
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    finalCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    finalCharacters.push(getRandom(upperCasedCharacters));
  }
  for (var i = 0; i <= options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
  }
  result.push(possibleCharacter);
  // Mix in at least one of each guaranteed character in the password
  for (var i = 0; i < finalCharacters.length; i++) {
    result[i] = finalCharacters[i];
  }
  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
