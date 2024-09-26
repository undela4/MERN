import React from 'react'
import './home.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {



  return (
    <div className='container mt-3'>
     <Navbar/> 
     <Welcome/> 
    </div>
  )
}


function Welcome(){


  return(<>
  
  <div className="welcome">
    <h2>Welcome to Admin Panel</h2>
  </div>
  </>)
}