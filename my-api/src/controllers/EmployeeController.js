const EmployeeModel=require('../models/EmployeeModel')

exports.InsertEmployee=(req,res)=>{

    let reqBody=req.body;
    EmployeeModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err});
        }
        else{
            res.status(200).json({status:"Success",data:data});
        }
    })
}