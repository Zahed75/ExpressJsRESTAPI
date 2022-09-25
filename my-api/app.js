const express = require('express');
const app = new express();

//Router Import
const router=require("./src/routes/api");


app.use("/api/v1",router)

//baseurl=api/v1/

//export

module.exports=app;
