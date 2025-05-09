const http = require("http");
const up = require("uppercase")
http.createServer((req, res) => {
    res.write(up("Welcome To Node.js"))
    res.end()
}).listen(8000, () => {
    console.log("Server is Runnit on port 3030");
})