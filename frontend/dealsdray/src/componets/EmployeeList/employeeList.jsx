import React,{useEffect, useState,useContext} from 'react'
import Table from 'react-bootstrap/Table';
import './emplist.css';
import { useNavigate } from 'react-router-dom';
import Tablerow from './Tablerow';
import { get_emp_list } from './emplist';
import Loader from '../Loader/Loader.jsx'
import { UserContext_1 } from '../../../usecontext1.jsx';


export default function EmployeeList() {


const [loader,setloader] = useState(false);
const {emplist,setemp_list} = useContext(UserContext_1);

const [search_term,setsearch_term] = useState();

const nav=useNavigate()



useEffect(()=>{

  get_emp_list(setloader,setemp_list,setsearch_term);
  
},[])


function search(e)
{
  let value=e.target.value;
  setsearch_term(
    value =='' 
      ? emplist 
      : emplist.filter((item) => item.Name.toLowerCase().includes(value.toLowerCase())) 
  );
  


}

  return (
    <div className='mt-3'>


      <div className="text-center">
      <h2 className='fw-bold'>Employee list</h2>
      </div>
      
      {loader?(<div className="">
        <div className="title">
          <h4 className=''>Total Count: {emplist.length}</h4>
          <button className='btn btn-outline-success' onClick={()=>nav('/addemp/0',{replace:true})}>Create Employee</button>
        </div>
        <div className='search'>
          <span>Search:  
            <input className='ms-3'onChange={search}>

            </input>
          </span>
        </div>
        <div className="line mb-3 "></div>
        <Table>

          <thead>
            <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Cource</th>
            <th>Create data</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              search_term.map((e,index)=>{
                return <Tablerow 
                key={index} 
                uniqueId={e._id} 
                image={e.img} 
                name={e.Name} 
                email={e.Email} 
                mobileNo={e.MobileNumber} 
                designation={e.Designation} 
                gender={e.Gender} 
                course={e.Cource} 
                createDate={e.Date.substring(0,10)

                } 

              />
              })
            }         

          
          </tbody>

        </Table>
      </div>):<div className='d-flex justify-content-center'>
      <Loader/>
      </div>
      
    }

    </div>
  )
}


