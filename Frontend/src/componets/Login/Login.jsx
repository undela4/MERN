import React,{useContext, useRef, useState} from 'react'
import './login.css'
import login_img from '../../assets/images/login.svg'
import InputFeild from './Inputfeild'
import { useNavigate } from 'react-router-dom';
import { onsuccess ,onerror} from '../../Tostify';
import { UserContext } from '../../../usecontext';
import axios from 'axios';
export default function Login() {

    const [data, setuserdata] = useState({Username:'',Password:''})
    const [error,seterror]=useState('');
    const [error1,seterror1]=useState('');
    const nav = useNavigate();

    const r1=useRef(null);
    const r2=useRef(null);

    const {login}=useContext(UserContext)


    const handleChange = (e) => {

        setuserdata({...data,[e.target.name]:e.target.value});
        if(e.target.value!='')
        {
            if(e.target.name==='Username'){
            seterror('');
              r1.current.style.boxShadow=""
            }
            else{
                seterror1('');
                r2.current.style.boxShadow=""
            }
        }
             
    };
    const Onsubmit = async() => {
        const {Username,Password}=data;
        
        if(Username.trim()!='')
        {
            
            if(Password.trim()!='')
            {
               
             await axios.post('http://localhost:5000/dealsdray/login',data).then((r)=>{
                console.log(r.data)
                  if(r.data.status)
                    {
                      onsuccess(r.data.msg)
                      login(r.data.data.Username)
                      nav('/home');
                  }
                  else{
                    onerror(r.data.msg)
                  }
               
                }).catch((err)=>{
                  console.log(err)
                  onerror('Invalid login details')
                })

            }
            else{
                    seterror1('please enter Password');
                    r2.current.focus();
                    r2.current.style.boxShadow="0 0 0 0.1rem red"
                }
        }
        else{
            seterror('please enter Username')
            r1.current.focus();
            r1.current.style.boxShadow="0 0 0 0.1rem red"
        }
    }


  return (
    <>
    <div className='sign_in container'>
      <div className="sign_in_left w-50">
        <img src={login_img} ></img>

      </div>
      <div className="sign_in_right">

        <h2 className='mb-2'>Login</h2>
        <div className="line"></div>
        <InputFeild  type={'email'} value={data.Username}  reference={r1} 
         method={handleChange} name='Username' label={`Enter Username `}
        className='w-75 input'
        error={error}/>

        
        <InputFeild  type={'password'} value={data.Password} reference={r2} 
        method={handleChange} name='Password' label={'Enter Password '}
        className='w-75 input'
        error={error1}/>
      
        <button className='btn btn-success' onClick={Onsubmit}>Submit</button>
      </div>
    </div>
    </>
  )
}
