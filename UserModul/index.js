const http = require("http");//This is Built-in Module
const MyModuls = require("./Module");//This is User Module
http.createServer((req, res) => {
    res.write("<h1> ----Moduls--- </h1>");
    
    res.write(MyModuls.MyName());//Module Calling
    res.write(MyModuls.MyAge());//Module Calling
    res.write(MyModuls.MyContact());//Module Calling

    res.end();
}).listen(8080, () => {
    console.log("Server is Running on Port 8080");
})