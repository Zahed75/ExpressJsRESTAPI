const express=require('express');
const HelloController=require("../controllers/HelloController");
const router=express.Router();


//This is my first get routing
router.get("/hello",HelloController.Hello)
router.post("/helloPost",HelloController.HelloPost)

//export
module.exports=router;