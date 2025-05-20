const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Name:String,
    Age:Number,
    Branch:String,
})

module.exports=mongoose.model("Student",studentSchema);