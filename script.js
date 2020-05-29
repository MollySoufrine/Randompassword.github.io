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
    "."
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
    "z"
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
    "Z"
  ];

  
  // Function to prompt user for password options
  function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
        prompt("How many characters would you like your password to contain? It must be a minimum of 8 characters.")
  );
    
    //Complete your function here...
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (parseInt === numericCharacters && parseInt >= 8 && parseInt <= 128){
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    console.log("Generating passcode for you");
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    }
    // Variable to store boolean regarding the inclusion of special, numeric , lowercase, uppercase characters
    
    // Conditional statement to check if user does not include any types of characters.
    else if ()
    //Password generator should ends if all four variables evaluate to false
    else {
        console.log("Passcode length must meet requirements")
    }
    return passwordOptions;
  }
  
  // Function for getting a random element from an array
  //Complete your function here...
  function randomArray(){
      for(var i=0; i >= 8; i<= 128; i++){
          var randomArray = 
      }
  }
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
  
    var result = [];
  
    //Complete your function here...
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
  