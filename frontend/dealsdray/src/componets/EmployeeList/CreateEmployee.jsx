import React, { useEffect, useState, useContext } from 'react';
import './CreateEmployee.css';
import addemp from '../../assets/images/addemp.svg';
import InputFeild from '../Login/Inputfeild';
import { useParams } from 'react-router-dom';
import { UserContext_1 } from '../../../usecontext1';
import { EmployeeValidation} from './emplist';
import { onsuccess,onerror } from '../../Tostify';
import { useNavigate } from 'react-router-dom';
import axios from'axios'
import { FcApproval } from "react-icons/fc";
import { Spin } from 'antd';

export default function CreateEmployee() {

    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [upload_button, setIupload_button] = useState({'display':'none' });
    const [bORs,setbORs]=useState(true);
    const [tick,settick]=useState(false);
    const nav=useNavigate();



const [empdata, setEmpData] = useState({
        Name: '',
        Email: '',
        MobileNumber:'',
        Designation:'',
        Gender: '',
        Cource: [],
});


    const { Name, Email, MobileNumber, Designation, Gender, Cource } = empdata;

    const { emplist } = useContext(UserContext_1);

    const id = useParams().id;

useEffect(() => {
        if (id !== 0) {
            const d = emplist.find(e => e._id === id);
            if (d) {
                setEmpData({
                    Name: d.Name,
                    Email: d.Email,
                    MobileNumber: d.MobileNumber,
                    Designation: d.Designation,
                    Gender: d.Gender,
                    Cource: d.Cource
                });
                setImgPreview(d.img)
            }
        }
    }, [id, emplist]);


function onChange(e) {
      const { name, value, type, checked } = e.target;
  
      if (type === 'checkbox') {
          setEmpData(prevData => ({
              ...prevData,
              [name]: checked
                  ? [...prevData[name], value] // Add value if checked
                  : prevData[name].filter(c => c !== value) // Remove value if unchecked
          }));
      } else {
          setEmpData({
              ...empdata,
              [name]: value
          });
      }
  }
  
    function onImageSelected(e) {

        const file = e.target.files[0];
        if (file) {
            setImg(file);
            setImgPreview(URL.createObjectURL(file));
            setIupload_button({'display':'block'});
            
          }
       
    }

async function onSubmit(e) 
    {
        e.preventDefault();
        const p=EmployeeValidation(empdata);
        if(img ||imgPreview)
        {
            if(p)
            {
                if(tick|| imgPreview)
                {
                    empdata.img=img?img:imgPreview;
                }else{
                    onerror('Please upload the image you selected');
                    return
                }
               
                if(id!=0)
                {
                        empdata.mode=id;
                }else{
                    empdata.mode='add';
                }
                console.log(empdata)

                axios.post('http://localhost:5000/dealsdray/addEmp',empdata).then((re)=>{
                if(re.data.status)
                    {
                        onsuccess('Employee Added Successfully');
                        nav('/emplist')
                    }
        
                })
            }
        }
        else{
            onerror('Please upload image')
        }
       
    }
async function upload_image()
{
    setbORs(false);
    setIupload_button({'display':'none'});
    const formData = new FormData();
    formData.append('file',img);
    await axios.post('http://localhost:5000/dealsdray/img_upload',formData).then((r)=>{

        if(r.data.status)
        {
            console.log(r.data.img[0])
            onsuccess('Image uploaded successfully');
            setImg(r.data.img[0]);
            settick(true);
            

        }else{
            onerror(r.data.msg)
        }
    });
    return ;
}




    return (
        <div className='addemp container'>
            <div className="addemp-left">
                <img src={addemp} alt="Add Employee" />
            </div>

            <div className="addemp-right">
                <h2>Create Employee</h2>
                <br />
                <InputFeild type="text" label='Employee Name' value={Name} name='Name' method={onChange} />
                <InputFeild type="email" label='Email' value={Email} name='Email' method={onChange} />
                <InputFeild type="Number" label='Mobile Number' name='MobileNumber' value={MobileNumber} method={onChange} />

                <select className='selection' onChange={onChange} name='Designation' value={Designation}>
                    <option value="">Select designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>

                <div className="mt-2 mb-3">
                    <label>Gender :</label>
                    <input type="radio" className='ms-3' name="Gender" value='Male' onChange={onChange} checked={Gender === 'Male'} />
                    <label className='ms-1'>Male</label>
                    <input type="radio" className='ms-3' name="Gender" value='Female' onChange={onChange} checked={Gender === 'Female'} />
                    <label className='ms-1'>Female</label>
                </div>

                <div className="mt-2 mb-3">
                    <label>Cource :</label>
                    <input type="checkbox" className='ms-3' name='Cource' value='MCA' onChange={onChange} checked={Cource.includes('MCA')} />
                    <label className='ms-1'>MCA</label>

                    <input type="checkbox" className='ms-3' name='Cource' value='BCA' onChange={onChange} checked={Cource.includes('BCA')} />
                    <label className='ms-1'>BCA</label>

                    <input type="checkbox" className='ms-3' name='Cource' value='BSC' onChange={onChange} checked={Cource.includes('BSC')} />
                    <label className='ms-1'>BSC</label>
                  </div>

                <div className='upload_image'>
                    <InputFeild type="file" accept=".jpg, .jpeg, .png" method={onImageSelected} className='w-50' />
                    {imgPreview && <img src={imgPreview} alt="Preview" />}
                    <button className='btn btn-warning h-25 mt-3 ' style={upload_button} disabled={!bORs} onClick={upload_image}>Upload</button>
                   
                   {!bORs&&<div className="">
                   {tick?<FcApproval  className='tick'/>:<Spin/>}
                   </div>
                   }
                   
                    

                </div>

                <button className='btn btn-success w-100' disabled={imgPreview==null?true:false} onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}
