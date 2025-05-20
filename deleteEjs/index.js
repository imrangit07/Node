const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentRoutes = require("./Routes/StudentRoutes")
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/EmpData").then(()=>{
    console.log("DB is successfully connected!");
    
})



app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/",StudentRoutes)



app.listen(3000,()=>{
    console.log("Server is Runnit on port 3000");
})