import React,{useRef, useState} from 'react'
import './login.css'
import login_img from '../../assets/images/login.svg'
import InputFeild from './Inputfeild'
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [data, setuserdata] = useState({email:'',password:''})
    const [error,seterror]=useState('');
    const [error1,seterror1]=useState('');
    const nav = useNavigate();

    const r1=useRef(null);
    const r2=useRef(null);


    const handleChange = (e) => {

        setuserdata({...data,[e.target.name]:e.target.value});
        if(e.target.value!='')
        {
            if(e.target.name==='email'){
            seterror('');
              r1.current.style.boxShadow=""
            }
            else{
                seterror1('');
                r2.current.style.boxShadow=""
            }
        }
             
    };
    const Onsubmit = () => {
        const {email,password}=data;
        

        if(email.trim()!='')
        {
            if(password.trim()!='')
            {
                nav('/home');
                console.log('ndvfnkf')
            }
            else{
                    seterror1('please enter password');
                    r2.current.focus();
                    r2.current.style.boxShadow="0 0 0 0.1rem red"
                }
        }
        else{
            seterror('please enter email')
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
        <InputFeild  type={'email'} value={data.email}  reference={r1} 
         method={handleChange} name='email' label={`Enter Email `}
        className='w-75 input'
        error={error}/>

        
        <InputFeild  type={'password'} value={data.password} reference={r2} 
        method={handleChange} name='password' label={'Enter password '}
        className='w-75 input'
        error={error1}/>
      
        <button className='btn btn-success' onClick={Onsubmit}>Sign in</button>
      </div>
    </div>
    </>
  )
}
