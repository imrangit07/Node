const express = require("express");
const app = express();
const StudentRoute = require("./Routes/StudentRoute");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/testData").then(()=>{
    console.log("DataBase Successfully connected!");
    
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("view engine","ejs");
app.use("/student", StudentRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})