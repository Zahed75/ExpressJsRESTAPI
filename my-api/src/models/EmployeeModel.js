const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    Name:{type:String},
    Role:{type:String},
    Salary:{type:Number},
    Adult:{type:Boolean},
    Comments:[],
    Address:{type:String,default:"Dhaka"},
    dob:{type:Date,default:Date.now},

},{versionKey:false})
const EmployeeModel= mongoose.model("employees",DataSchema)
module.exports=EmployeeModel