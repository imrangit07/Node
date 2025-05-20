const express =require("express");
const Router = express.Router();
const StudentCon = require("../Controllers/StudentController")

Router.get("/",StudentCon.Home);
Router.get("/insert",StudentCon.Insert);
Router.post("/submit",StudentCon.SubmitData);
Router.get("/display",StudentCon.Display);
Router.get("/update",StudentCon.Update);
Router.get("/delete",StudentCon.Delete);

module.exports=Router;