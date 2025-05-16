const express = require("express");
const Router = express.Router();
const StuRouter = require("../Components/StuComponents");

Router.get("/home",StuRouter.Home);
Router.get("/about",StuRouter.About);
Router.get("/services",StuRouter.Services);
Router.get("/gallery",StuRouter.Gallery);
Router.get("/placement",StuRouter.Placement);
Router.get("/join",StuRouter.Join);
Router.get("/contact",StuRouter.Contact);
Router.post("/datasave",StuRouter.DataSave);

module.exports = Router;
