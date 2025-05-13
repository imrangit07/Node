const express =require("express");

const route = express();

route.get("/home",(req,res)=>{
    res.send("<h1>This is features Home Page!</h1>");
});
route.get("/about",(req,res)=>{
    res.send("<h1>This is features About Page!</h1>");
});
route.get("/library",(req,res)=>{
    res.send("<h1>This is features Library Page!</h1>");
});

module.exports=route;