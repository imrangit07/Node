const http = require("http");

http.createServer((req, res) => {
    res.write("<h1>This is my first node program </h1>");
    res.end();
}).listen(8080,()=>{
    console.log("Server is Running on Port 8080");
})