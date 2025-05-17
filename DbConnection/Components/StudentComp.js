const StudentData = require("../StudentModels/StudentModels")

const Home = (req,res)=>{
 res.render("home")
}

const submit = async(req,res)=>{
    console.log(req.body);
    const {Name,Age,Branch} = req.body;
    await StudentData.create({
        Name:Name,
        Age:Age,
        Branch:Branch
    })

    res.send("Data Submited Successfully Done!");
    
}

module.exports={Home,submit};