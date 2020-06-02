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

    alert("Password must be a minimum of 8 characters");
    alert("password can be a max of 128 characters");
  // Function to prompt user for password options
  function getPasswordOptions ()
  var passwordOptions = []
    // Variable to store length of password from user input
    var passwordOptions = parseInt(]
        prompt("How many characters would you like your password to contain?")
    );   
      // booleans to store answers from the participant
    passwordOptions.includeSpecialCharacter = confirm("Do you want to include a special character?");

    passwordOptions.includeUppercaseCharacter = confirm("Do you want uppercase letters?");

    passwordOptions.includelowercaseCharacter = confirm("Do you want lowercase letters?");

    //Complete your function here...
    // Conditional statement to check if password length is a number as well as greater than 8 and less than 128
    if (isInteger(passwordOptions.length) &&
    passwordOptions.length >= 8 &&
    passwordOptions.length <= 128 ){
        
    }
   
    else {
        alert("Password does not meet requirements")
    }
    return (passwordOptions);
}
 // function charSet(arr){
      //used for loop to choose password characters
   //   for (var i; i >= length.length; i++)
     //    console.log("Generating password");
     // }
      //charSet(upperCasedCharacters);
      //charSet(lowerCasedCharacters);
      //charSet(numericCharacters);
     // charSet(specialCharacters);
    //}
    
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions(
      
    
  
    var result = [passwordOptions];
  
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
  