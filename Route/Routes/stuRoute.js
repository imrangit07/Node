const express = require("express");
const route = express.Router()

route.get("/home",(req,res)=>{
    res.send("<h1>This is Student Home Page!</h1>");
});
route.get("/profile",(req,res)=>{
    res.send("<h1>This is Student Profile Page!</h1>");
});
route.get("/fee",(req,res)=>{
    res.send("<h1>This is Student Fee Page!</h1>");
});
route.get("/about",(req,res)=>{
    res.send("<h1>This is Student About Page!</h1>");
});

module.exports=route;