const express= require("express")
const Router = express.Router();
const StudentComp = require("../Components/StudentComp");

Router.get("/home",StudentComp.Home);
Router.post("/submit",StudentComp.submit);

module.exports=Router;