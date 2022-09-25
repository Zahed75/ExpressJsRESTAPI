const express = require('express');
const app = new express();

//Router Import
const router=require("./src/routes/api");

app.use("/api/v1",router)

//baseurl=api/v1/

//undefined Route

app.use('*',(req,res)=>{
    res.status(404).json({status:"Failed",data:"Not Found"});
})

//export
module.exports=app;
