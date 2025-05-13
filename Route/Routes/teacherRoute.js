const express =require("express");

const route = express();

route.get("/home",(req,res)=>{
    res.send("<h1>This is Teacher Home Page!</h1>");
});
route.get("/about",(req,res)=>{
    res.send("<h1>This is Teacher about Page!</h1>");
});
route.get("/subject",(req,res)=>{
    res.send("<h1>This is Teacher Subject Page!</h1>");
});

module.exports=route;