const Admin =require("../Models/Admin.js");


exports.AddAdmin=async (req, res) => {


  const { Username, Email, Password } = req.body;
  try {
    const ad = await Admin.findOne({ Email });
    
    if (ad) {
      
      return res.status(200).send({ status: false, msg: 'Admin already exists' });
    }

    const newUser = await Admin.create({
        Username,
        Email,
        Password,
    
    });

    res.status(200).send({ status: true, msg: 'Admin added successfully', data: newUser });
  } catch (e) {
    console.log(e.message);
    res.status(501).send({ status: false, msg: 'Internal Error' });
  }
}

exports.AdminCheck=async (req, res) => {
    try {
        const {Email,Password,Username} = req.body;
        const ad = await Admin.findOne({ Username });
      

        if (!ad) {
            return res.status(200).send({ status: false, msg: 'Admin not found' });
        }
        else{
            if(ad.Password==Password){
                return res.status(200).send({ status: true, msg: 'Admin Login Successfully',data:ad});
            }
            else{
                return res.status(200).send({ status: false, msg: 'Invalid login details' });
            }
        }

    } catch (e) {
      console.log(e.message);
      res.status(501).send({ status: false, msg: 'Internal Error' });
    }
  }