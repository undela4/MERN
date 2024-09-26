import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './componets/Home/Home.jsx';
import Login from './componets/Login/Login.jsx';
import EmployeeList from './componets/EmployeeList/employeeList.jsx';


function App() {

  const [token, setToken] = useState(true   );
 

  return (
    <>

  

    <Routes>
   
      <Route  path='/home' element={<Home/>} />
      <Route  path='/' element={<Login/>} />
      <Route  path='/emplist' element={<EmployeeList/>} />


    </Routes>
      
    </>
  )


}

export default App

