import { useContext, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './componets/Home/Home.jsx';
import Login from './componets/Login/Login.jsx';
import EmployeeList from './componets/EmployeeList/employeeList.jsx';
import CreateEmployee from './componets/EmployeeList/CreateEmployee.jsx';
import { UserContext } from '../usecontext.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';


function App() {

  const {user}=useContext(UserContext);
  
  return (
    <>
    { user?<Routers/>:<Login/> }
    <Toaster position="top-center" reverseOrder={true}/>
    </>
   
   

)
}

export default App


function Routers(){

  return(
    <>
    <Navbar/>
    <Routes>
      <Route  path='/home' element={<Home/>} />
      <Route  path='/' element={<Login/>} />
      <Route  path='/emplist' element={<EmployeeList/>} />
      <Route  path='/addemp/:id' element={<CreateEmployee/>} />
    </Routes>
  

    </>

  )
}

