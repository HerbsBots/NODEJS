
// importing the require('fs') module
const fs = require('fs');


// using the readFile method to read the txt content
fs.readFile('hello.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:', data);
});
