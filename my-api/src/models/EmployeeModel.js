const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    Name:{type:String,unique:true},
    Role:{type:String,required:true},
    Salary:{type:Number, min:6, max:12},
    Adult:{type:Boolean},
    Comments:[],
    Address:{type:String,default:"Dhaka"},
    dob:{type:Date,default:Date.now},

},{versionKey:false})
const EmployeeModel= mongoose.model("employees",DataSchema)
module.exports=EmployeeModel