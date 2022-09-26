const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    Name:String,
    Role:String,
    Salary:String,
    Adult:Boolean,
    Comments:[],
    Address:{},
    dob:Date,
})
const EmployeeModel= mongoose.model("employee",DataSchema)
module.exports=EmployeeModel