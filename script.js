// Array of special Charachters
var specialCharacters = [
  "@",
  "%",
  "+",
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
// Array of numeric characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters
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
// Array of uppercase characters
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
// Info given from assignment
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// user input section
function generatePassword() {
  var length = prompt(
    "How long would you like your password to be (5 - 80 characters)?"
  );
  length = parseInt(length);
  if (isNaN(length)) {
    alert("That is not a valid number, please try again");
    return "NOT A VALID NUMBER! C'MON!!";
  }
  if (length < 5) {
    alert("Your password is way too short");
    return;
  }
  if (length > 80) {
    alert("Your password is too long");
    return;
  }
  // user confirms specific chars they want to use
  var specialChars = confirm(
    "Click OK to confirm including special characters"
  );
  var numericChars = confirm(
    "Click OK to confirm including numeric characters"
  );
  var lowercaseChars = confirm(
    "Click OK to confirm including lowercase characters"
  );
  var uppercaseChars = confirm(
    "Click OK to confirm including uppercase characters"
  );
  if (!specialChars && !numericChars && !lowercaseChars && !uppercaseChars) {
    alert("Are you serious?? you need to select at least One!");
    return;
  }
  var password = "";
  // loop to generate numbers
  for (var i = 0; i < length; i++) {
    if (specialChars) {
      password += getRandomValue(specialCharacters);
    }
    if (lowercaseChars) {
      password += getRandomValue(lowerCasedCharacters);
    }
    if (uppercaseChars) {
      password += getRandomValue(upperCasedCharacters);
    }
    if (numericChars) {
      password += getRandomValue(numericCharacters);
    }
  }
  // mixes charachters around
  return password.slice(0, length);
}
