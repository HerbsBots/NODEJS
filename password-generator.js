
// importing the require('generate-password') module
var generatePassword = require('generate-password');

function generateRandomPassword() {
  var password = generatePassword.generate({
    length: 10, // The length of the generated password
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase characters in the password
    lowercase: true, // Include lowercase characters in the password
  });

  console.log('Generated password:', password);
}

// Call the function to generate and log a random password
generateRandomPassword();
