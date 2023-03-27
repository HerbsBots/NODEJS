
// importing the require('fs') module
const fs = require('fs');


// using the writeFile method to create the txt. file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('welcome.txt has been created successfully');
});