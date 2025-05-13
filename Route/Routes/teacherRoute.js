const express =require("express");

const route = express();

route.get("/home",(req,res)=>{
    res.send("<h1>This is Teacher Home Page!</h1>");
});
route.get("/about",(req,res)=>{
    res.send("<h1>This is Teacher about Page!</h1>");
});
route.get("/address",(req,res)=>{
    res.send("<h1>This is Teacher address Page!</h1>");
});
route.get("/salary",(req,res)=>{
    res.send("<h1>This is Teacher salary Page!</h1>");
});

module.exports=route;