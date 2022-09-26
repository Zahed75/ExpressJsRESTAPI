const TeacherModel=require('../models/TeacherModel')

exports.InsertTeacher=(req,res)=>{
    let reqBody =req.body;
    TeacherModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(201).json({status:"Success",data:data})
        }
    })
}

// Read data or get data

exports.ReadTeacher=(req,res)=>{
    let Query={}
    let projection="Name Faculty EmId Salary"
    TeacherModel.find(Query,projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"failed",data:err})
        }
        else{
            res.status(201).json({status:"Get All Data Success",data:data})
        }
    })
}

//Update Data


exports.UpdateTeacher=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    let reqBody=req.body;

    TeacherModel.updateOne(QUERY,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Failed",data:err});
        }
        else{
            res.status(200).json({status:"Success",data:data})
        }
    })
}
