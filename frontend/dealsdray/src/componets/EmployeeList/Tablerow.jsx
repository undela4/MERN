import React from 'react'
import { useNavigate } from 'react-router-dom';
import { onsuccess } from '../../Tostify';
import { Popconfirm } from 'antd';

import axios from 'axios';

export default function Tablerow({ uniqueId, image, name, email, mobileNo, designation, gender, course, createDate, }) {

  const nav=useNavigate();
  function edit(id)
  {
    nav(`/addemp/${id}`);
  
  }


async function deleteEmp()
{
  const d = {_id:uniqueId}
  await axios.post('http://localhost:5000/dealsdray/deleteEmp',d).then((r)=>{
    if(r.data.status){
      onsuccess(r.data.msg);
      nav('/emplist')
    }
    else{
      console.log(r.data.msg)
    }


  });


}

 
  return (
    <>
    <tr>
    <td>{uniqueId.substring(18,)}</td>
      <td>{image ? <img src={image} className='rounded-circle' alt="Employee" width="50" height="50" /> : "No Image"}</td>
      <td>{name}</td>
      <td><a href={`mailto: ${email}`}>{email}</a></td>
      <td>{mobileNo}</td>
      <td>{designation}</td>
      <td>{gender}</td>
      <td>{course.join(', ')}</td> 
      <td>{ formatDate(createDate)}</td>
      <td>
          <button className='me-3 btn btn-outline-danger' onClick={()=>edit(uniqueId)}>Edit</button>
          <button className='btn btn-danger'><Logout method={deleteEmp}/></button>

            </td>
    </tr>
    </>
  )
}







function formatDate(dateString) {
  const date = new Date(dateString);
  

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-GB', options); // 'en-GB' for day-month-year format
  

  const formattedParts = formatter.formatToParts(date);

  const day = formattedParts.find(part => part.type === 'day').value;
  const month = formattedParts.find(part => part.type === 'month').value;
  const year = formattedParts.find(part => part.type === 'year').value;

  return `${day}-${month}-${year}`;
}



function Logout({method}){

  return(
      <>
      <Popconfirm
          title="Delete employee"
          description="Are you sure to delete ?"
          okText="Yes"
          cancelText="No"
          onConfirm={method}
      >
  Delete
</Popconfirm>
</>
  )
}