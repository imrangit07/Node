const express = require("express");
const app = express();
const stuRoutes = require("./Routes/stuRoute")
const feaRoutes = require("./Routes/featurs")
const teacherRoutes = require("./Routes/teacherRoute")

app.use("/student",stuRoutes)
app.use("/featurs",feaRoutes)
app.use("/teacher",teacherRoutes)

app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
    
})