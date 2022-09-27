const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    Name: {type: String, unique: true},
    Faculty: {type: String},
    EmId: {type: String, unique: true},
    Salary: {type: Number},
    //custom validation message
    Mobile: {
        type: String,
        validate: {
            validator: function (value) {
                if(value.length=== 11) {
                    return true
                }
                else {
                    return false
                }


            },
            message:" Phone Number Must be 11 Digit Required!"
        }

    },
    //regex validations
    CompanyNumber:{
        type:String,
        validate: {
            validator:function (value) {
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"Invalid BD Number Please Check your number"
        }
    }

})

const TeacherModel = mongoose.model("teachers", DataSchema)

module.exports = TeacherModel;
