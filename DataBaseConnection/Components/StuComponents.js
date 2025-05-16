const StuModel = require("../StuModels/StuModels")

const Home = (req, res) => {
    res.render("home");
}
const About = (req, res) => {
    res.render("about")
}
const Services = (req, res) => {
    res.render("services")
}
const Gallery = (req, res) => {
    res.render("Gallery")
}
const Placement = (req, res) => {
    res.render("placement")
}
const Join = (req, res) => {
    res.render("join")
}
const Contact = (req, res) => {
    res.render("contact")
}

const DataSave = async (req, res) => {//we get data in req.body; using body parser => body-parser is a middle
    console.log(req.body);

    const { roolno, name, city, fees } = req.body;
    await StuModel.create({
        roolno: roolno,
        name: name,
        city: city,
        fees: fees
    })

    res.send("Data Save Succesfully!");
}
module.exports = {
    Home,
    About,
    Services,
    Gallery,
    Placement,
    Join,
    Contact,
    DataSave
}