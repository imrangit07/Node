const StudentSchema = require("../Models/StudentModels")

const Home = (req, res) => {
    res.render("home")
}
const Insert = (req, res) => {

    res.render("insert")
}
const Display = async (req, res) => {
    const stuData = await StudentSchema.find();
    console.log(stuData);

    res.render("display", { stuData })
}
const Update = async (req, res) => {
    const stuData = await StudentSchema.find();
    res.render("update", { stuData })
}
const Delete = async (req, res) => {
    const { id } = req.query;
    await StudentSchema.findByIdAndDelete(id);

    const stuData = await StudentSchema.find();
    res.render("update", { stuData })
}

const SubmitData = (req, res) => {
    //  console.log(req.body);
    const { name, age, branch } = req.body;
    StudentSchema.create({
        Name: name,
        Age: age,
        Branch: branch
    })


    res.render("insert")
}

module.exports = { Home, Insert, Display, Update, SubmitData,Delete }