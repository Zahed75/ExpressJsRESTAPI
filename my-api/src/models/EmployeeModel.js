const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    Name:{type:String,unique:true},
    Role:{type:String,required:true},
    Salary:{type:Number,
    //    custom error message
        min:[6,"Minimum 6 Max 12 but Supplied value is ={VALUE}"],
        max:[12,"Minimum 6 Max 12 but Supplied value is ={VALUE}"]

    },
    Adult:{type:Boolean},
    Comments:[],
    Address:{type:String,default:"Dhaka"},
    dob:{type:Date,default:Date.now},

},{versionKey:false})
const EmployeeModel= mongoose.model("employees",DataSchema)
module.exports=EmployeeModel