const mongoose =require("mongoose");


const admin=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    }
    ,
    Email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    Password:{
        type:String,
        required:true
    }
   
})
module.exports=mongoose.model("admin",admin);