const mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    Name:String,
    Faculty:String,
    EmId:String,
    Salary:String,
})

const TeacherModel= mongoose.model("teachers",DataSchema)

module.exports=TeacherModel;
