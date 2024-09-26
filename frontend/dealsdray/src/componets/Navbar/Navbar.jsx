import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { Button, Popconfirm } from 'antd';




export default function Navbar() {

    const [f,setf] = useState(false)
    
    
  return (
    <>
      <nav>
        <div className="nav-bar">
        <img className="logo" src="https://play-lh.googleusercontent.com/Im3CE-kmZJmZMC8pkhpCj7tGznPI6LC1EjhaTJ3E6Cdh_mgW5VxF_joZK31XWwZPmkT5" ></img>
        <NavLink className={'nav-items'}>Home</NavLink>
        <NavLink className={'nav-items'} to='/emplist'>Employee List</NavLink>


        {!f&&<NavLink className={'nav-items'}>Name-</NavLink>}

        {
        f?<NavLink className={'nav-items'}>Login</NavLink>
        
        :<NavLink className={'nav-items'}><Logout f={f} setf={setf}/></NavLink>
        }




        </div>
        
    </nav>
    </>
  )
}


function Logout({f,setf}){

    return(
        <>
        <Popconfirm
            title=" Logout"
            description="Are you sure to Logout ?"
            okText="Yes"
            cancelText="No"
            onConfirm={()=>setf(!f)}

        >
    Logout
  </Popconfirm>
  </>
    )
}