 // importing the http module
const http = require("node:http");


// creating a server 
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end("Hello Node!!!!")
});


// server listening to request
server.listen(3000, () => {
    console.log("Server running on port 3000")
});
