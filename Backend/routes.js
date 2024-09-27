const express=require('express');

const router=express.Router();

const {AddEmployee,getEmployees,deleteEmployees} =require('./Controllers/createEmployee.js');
const {upload_image} =require('./Controllers/imageUpload.js');
const {AddAdmin,AdminCheck} =require('./Controllers/addAdmin.js');

//http://localhost:5000/dealsdray/addEmp
router.post('/addEmp',AddEmployee);

//http://localhost:5000/dealsdray/deleteEmp
router.post('/deleteEmp',deleteEmployees);

//http://localhost:5000/dealsdray/addAdmin
router.post('/addAdmin',AddAdmin);


//http://localhost:5000/dealsdray/login
router.post('/login',AdminCheck);


//http://localhost:5000/dealsdray/getemp
router.post('/getEmp',getEmployees);

//http://localhost:5000/dealsdray/img_upload
router.post('/img_upload',upload_image);



module.exports=router