// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var userInput = [];
function getPasswordOptions() {
  //Password length
  var passwordLength = prompt("How many characters would you like your password to contain?");
  userInput = [];
  if (passwordLength < 8) {
    alert("Password must contain at least 8 characters");
    getPasswordOptions();
  } else if (passwordLength > 128) {
    alert("Password must not exceed 128 characters");
    getPasswordOptions();
  } else {
    userInput.push(passwordLength);
      //?Contain special characters
      if (confirm("If you would like your password to include SPECIAL CHARACTERS click ok, otherwise click cancel to continue")) {
        userInput.push(specialCharacters);
      }
      //?Contain numericcharacters
      if (confirm("If you would like your password to include NUMERIC CHARACTERS click ok, otherwise click cancel to continue")) {
        userInput.push(numericCharacters);
      }
      //?Contain uppercase characters
      if (confirm("If you would like your password to include UPPERCASE CHARACTERS click ok, otherwise click cancel to continue")) {
        userInput.push(upperCasedCharacters);
      }
      //?Contain lowercase characters
      if (confirm("If you would like your password to include LOWERCASE CHARACTERS click ok, otherwise click cancel to continue")) {
        userInput.push(lowerCasedCharacters);
      }  
  }

}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var string = [];
  while (string.length < userInput[0]) {
      if (userInput.includes(specialCharacters) && string.length < userInput[0]) {
        string.push(getRandom(specialCharacters));
      }
      if (userInput.includes(numericCharacters) && string.length < userInput[0]) {
        string.push(getRandom(numericCharacters));
      } 
      if (userInput.includes(upperCasedCharacters) && string.length < userInput[0]) {
        string.push(getRandom(upperCasedCharacters));
      }
      if (userInput.includes(lowerCasedCharacters) && string.length < userInput[0]) {
        string.push(getRandom(lowerCasedCharacters));
      }
    }
  return string.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);