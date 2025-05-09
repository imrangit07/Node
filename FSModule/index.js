const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    res.write("Welcome To Node.js")
    fs.readFile("text.txt",(err,data)=>{
      res.write(data)
      res.end()
    })
}).listen(8000, () => {
    console.log("Server is Runnit on port 3030");
})


// Create File

//fs.appendFile()
//fs.open()
//fs.writeFile()