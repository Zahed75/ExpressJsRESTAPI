const express=require('express');
const HelloController=require("../controllers/HelloController");
const TeacherController=require("../controllers/TeacherController");
const EmployeeController=require("../controllers/EmployeeController")
const router=express.Router();


//This is my first get routing
router.get("/hello",HelloController.Hello)
router.post("/helloPost",HelloController.HelloPost)

//Mongoose

router.post("/insert-teacher-data",TeacherController.InsertTeacher)
router.get("/get-teacher",TeacherController.ReadTeacher)
router.post("/Update-teacher/:id",TeacherController.UpdateTeacher)
router.delete("/delete-teacher/:id",TeacherController.DeleteTeacher)
router.post("/insert-employee",EmployeeController.InsertEmployee)

//export
module.exports=router;