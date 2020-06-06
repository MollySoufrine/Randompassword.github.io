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

alert("Password must be a minimum of 8 characters");
alert("password can be a max of 128 characters");
//var passwordOptions = []
// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // booleans to store answers from the participant
  var specialCharacters = confirm(
    "Do you want to include a special character?"
  );

  var upperCasedCharacters = confirm("Do you want uppercase letters?");

  var lowerCasedCharacters = confirm("Do you want lowercase letters?");
  var numericCharacters = confirm("Do you want numbers in your password?");

  // Conditional statement to check if password length is a number as well as greater than 8 and less than 128
  if (Number.isInteger(length) && length >= 8 && length <= 128) {
    var passwordOptions = {
      length: length,
      specialCharacters: specialCharacters,
      upperCasedCharacters: upperCasedCharacters,
      lowerCasedCharacters: lowerCasedCharacters,
      numericCharacters: numericCharacters,
    };
  } else {
    alert("Password does not meet requirements");

    return passwordOptions;
  }
}
function getRandomElementfromArray(arr) {
  var arrayKey = Math.floor(Math.random() * numericCharacters.length);
  return arr[arrayKey];
}
//function getRandomElement(arr) {
//using equation to pull random characters from arrays and calling return of passwordOptions
//var arrayKey = Math.floor(Math.random() * arr.length + 1);
//return arrayKey;
//}
// Function to generate password with user input
function generatePassword() {
  var password = "";
  var options = getPasswordOptions();
  console.log(options);
  // i set this variable to an empty bracket so in the conditional i
  //can check for multiple character types
  var availableCharacterTypes = [];
  if (options.specialCharacters) {
    // availableCharacterTypes = [...availableCharacterTypes, ...specialCharacters];
    for (var i = 0; i < specialCharacters.length; i++);
    {
      availableCharacterTypes.push(specialCharacters[i]);
    }
  }
  if (options.upperCasedCharacters) {
    for (var i = 0; i < upperCasedCharacters.length; i++);
    {
      availableCharacterTypes.push(upperCasedCharacters[i]);
    }
    if (options.lowerCasedCharacters) {
      for (var i = 0; i < lowerCasedCharacters.length; i++);
      {
      availableCharacterTypes.push(lowerCasedCharacters[i]);
    }
  }
    if (options.numericCharacters) {
      for (var i = 0; i < numericCharacters.length; i++);
      {
      availableCharacterTypes.push(numericCharacters[i]);
    }
  }
    // var availableCharacterTypes = [
    //  specialCharacters
    //  numericCharacters
    //  lowerCasedCharacters
    //  upperCasedCharacters
    // ];

    for (var i = 0; i <= options.length; i++) {
      //  = '@'
      password += getRandomElementfromArray(availableCharacterTypes);
    }
    console.log(password);
    return password;
  }

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
