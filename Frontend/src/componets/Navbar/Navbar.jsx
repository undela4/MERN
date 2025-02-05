import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { Popconfirm } from 'antd';
import { UserContext } from '../../../usecontext';
import Cooikes from 'js-cookies'


export default function Navbar() {

  
    const {user,logout}=useContext(UserContext);
    const name=Cooikes.getItem('user');


    
  return (
    <>
      <nav>
        <div className="nav-bar mt-3">
        <img className="logo" src="https://play-lh.googleusercontent.com/Im3CE-kmZJmZMC8pkhpCj7tGznPI6LC1EjhaTJ3E6Cdh_mgW5VxF_joZK31XWwZPmkT5" ></img>
        <NavLink className={'nav-items'} to='/home'>Home</NavLink>
        <NavLink className={'nav-items'} to='/emplist'>Employee List</NavLink>


        {user&&<NavLink className={'nav-items'}>{name}-</NavLink>}

        {
        !user?<NavLink className={'nav-items'}>Login</NavLink>
        
        :<NavLink className={'nav-items'}><Logout method={logout}/></NavLink>
        }




        </div>
        
    </nav>
    </>
  )
}


function Logout({method}){

    return(
        <>
        <Popconfirm
            title=" Logout"
            description="Are you sure to Logout ?"
            okText="Yes"
            cancelText="No"
            onConfirm={method}
        >
    Logout
  </Popconfirm>
  </>
    )
}