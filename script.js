var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", ")", ")", "-", "-", "+", "=", "[", "{", "]", "}", "|", "<", ">", "?"];
console.log(specialCharacters);

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numeric);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(upperCase);

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCase);

var passwordLength = prompt("How many characters would you like your password to be?");
console.log(passwordLength);

function convertToInter(str) {
  return parseInt(str);
}
convertToInter(passwordLength);
console.log(parseInt(passwordLength));
console.log(typeof parseInt(passwordLength));


var setSpecial = confirm("Would you like to use speical characters?");
console.log(setSpecial);

var setNumeric = confirm("Would you like to use numeric characters?");
console.log(setNumeric);

var setUpperCase = confirm("Would you like to use uppercase characters?")
console.log(setUpperCase);

var setLowerCase = confirm("Would you like to use lowercase characters?")
console.log(setLowerCase);

var passwordInputs = {
  length: parseInt(passwordLength),
  special: setSpecial,
  num: setNumeric,
  upper: setUpperCase,
  lower: setLowerCase,
};

console.log(passwordInputs);


var randomSpecial = specialCharacters[Math.floor(Math.random()*22)];
// console.log(randomSpecial);

var randomNumeric = numeric[Math.floor(Math.random()*10)];
// console.log(randomNumeric);

var randomUpper = upperCase[Math.floor(Math.random()*26)];
// console.log(randomUpper);

var randomLower = lowerCase[Math.floor(Math.random()*26)];
// console.log(randomLower);


const randomFunction = {
  special: randomSpecial,
  num: randomNumeric,
  upper: randomUpper,
  lower: randomLower,
};

var myArray = [];


if (special = true, num = true, upper = true, lower = true) {
  var myArray = specialCharacters.concat(numeric,upperCase,lowerCase);
} else if (special = true, num = true, upper = true, lower = false) {
  var myArray = specialCharacters.concat(numeric,upperCase);
} else if (special = true, num = true, upper = false, lower = true) {
  var myArray = specialCharacters.concat(numeric, lowerCase);
} else if (special = true, num =false, upper = true, lower = true) {
  var myArray = specialCharacters.concat(lower,upperCase);
} else if (special = true, num = true, upper = false, lower = false) {
  var myArray = specialCharacters.concat(numeric);
} else if (special = true, num = false, upper = false, lower = true) {
var myArray = specialCharacters.concat(lowerCase);
} else if (special = true, num = false, upper = true, lower = false) {
  var myArray = specialCharacters.concat(upperCase);
} else if (special = true, num = false, upper = false, lower = false) {
  var myArray = specialCharacters;
} else if (special = false, num = true, upper = true, lower = true) {
  var myArray = numeric.concat(lowerCase,upperCase);
} else if (special = false, numeric = true, upper = true, lower = false) {
  var myArray = numeric.concat(upperCase);
} else if (speical = false, num = true, upper = false, lower = true) {
  var myArray = numeric.concat(lowerCase);
} else if (speical = false, num = true, upper = false, lower = false) {
  var myArray = numeric;
} else if (special = false, num = false, upper = true, lower = true) {
  var myArray = upperCase.concat(lowerCase);
} else if (special =  false, num = false, upper = true, lower = false) {
  var myArray = upperCase;
} else if (special = false, num = false, upper = false, lower = true) {
  var myArray = lowerCase;
};

console.log(myArray);

var passArray = [];


const resultEl = document.getElementById('password')

var generateBtn = document.querySelector("#generate");



// // for (i = 0; i < passwordInputs.length; i++) {

// // }


//Creat function generatePassword
function generatePassword () {
  // for (let i = 0; i < passwordInputs.length; i++)
};

console.log(generatePassword);

// // }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// // }

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
