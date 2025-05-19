
const EmpModels = require("../Models/EmpModels")
const Home = (req, res) => {
    res.render("home");
}
const Insert = (req, res) => {
    res.render("insert");
}

const SaveData = (req, res) => {
    console.log(req.body);
    const { id, name, position, salary } = req.body;

    EmpModels.create({
        empId: id,
        empName: name,
        empPosition: position,
        empSalary: salary
    })


        res.render("insert");
}
const DisplayData =async(req,res)=>{
      const empData = await EmpModels.find();
      console.log(empData);
      
      res.render("display",{empData})
}

const Update =async (req,res)=>{
    const empData = await EmpModels.find();
      console.log(empData);
      
      res.render("update",{empData})
    // res.send("okkkkk")
}
const Delete =async (req,res)=>{
    const {id}=req.query;
    // console.log(id);
    await EmpModels.findByIdAndDelete(id)

    const empData = await EmpModels.find();

      res.render("display",{empData})
}
module.exports = { Home, Insert, SaveData,DisplayData,Update,Delete }