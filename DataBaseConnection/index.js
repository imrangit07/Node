const express = require("express");
const app = express();
const StuRoute = require("./StuRoutes/StuRoute")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testData").then(()=>{
    console.log("MongoDb succesfully Connected");
    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); 
// Set EJS as templating engine 


app.set('view engine', 'ejs');
app.use("/student", StuRoute);

app.listen(3000, () => {
    console.log("Server is Running on Port 3000");

})