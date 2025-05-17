const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Branch: String
})

module.exports = mongoose.model("Student", StudentSchema)