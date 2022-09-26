const mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    Name:String,
    Roll:String,
    Class:String,
    Remarks:String,
})

const TeacherModel= mongoose.models("Teacher",DataSchema)

module.exports=TeacherModel;
