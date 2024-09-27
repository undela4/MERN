const Employees =require('../Models/Addemployee.js')




exports.AddEmployee=async (req, res) => 
{

  

  try {
    const {Name,Email,MobileNumber,Designation,Gender,Cource,img ,mode}=req.body;

    if(mode!='add')
    {
      const updatedUser = await Employees.findOneAndUpdate(
        { _id:mode },
        {
          $set: {
            Name,
            Email,
            MobileNumber,
            Designation,
            Gender,
            Cource,
            img,
            Date: new Date(),
          }
        },
        { new: true } 
      );
      res.status(200).send({ status: true, msg: 'Employee updated successfully', data:updatedUser });

    }
    else{
      const emp = await Employees.findOne({Email});
      if (emp) {
        return res.status(200).send({ status: false, msg: 'Employee already exists' });
      }
      const newUser = await Employees.create({
        Name,
        Email,
        MobileNumber,
        Designation,
        Gender,
        Cource,
        Date: new Date(),
        img, 
       
      });
  
      res.status(200).send({ status: true, msg: 'Employee added successfully', data: newUser });
    }
    
  }
  catch (e) {
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
}


exports.getEmployees=async (req, res) => 
{

  try {

    const Employes= await Employees.find();
    res.status(200).send({ status: true, data: Employes });
  }
catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
}



exports.deleteEmployees=async (req, res) => 
  {
  
    try {
      const _id=req.body;
  
      const Employes= await Employees.deleteOne({_id});
      res.status(200).send({ status: true,msg:'Employee deleted successfully'});
    }
  catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  }
  
