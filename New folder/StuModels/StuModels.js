const mongoose = require("mongoose");

const StuSchema = new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports= mongoose.model("StudentData",StuSchema)