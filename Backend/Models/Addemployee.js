const mongoose =require("mongoose");



const Employees=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    }
    ,
    Email:{
        type:String,
        required:true
    }
    ,
    MobileNumber:{
        type:Number,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Cource:{
        type:[String],
        required:true
    },
    Date:{
        type: Date,
        required: true
    },
    img:{
        type: String,
     
    }
   
    
})
module.exports=mongoose.model("Employees",Employees);