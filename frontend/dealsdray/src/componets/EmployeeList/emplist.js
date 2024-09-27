import axios from 'axios';
import {onsuccess,onerror} from '../../Tostify.js'


export async function get_emp_list(setloader,setemp_list,setsearch_term)
{
    try{

        await axios.post('http://localhost:5000/dealsdray/getEmp').then((r)=>{ 
        if(r.data.status)
        {
            r.data.data.sort((a, b) => a.Name.localeCompare(b.Name));
            setemp_list(r.data.data);
            setsearch_term(r.data.data)
            setloader(true);
        }
        });
    }
    catch(err){
        console.log(err)
    }
   
   
}



function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function EmployeeValidation(data)
{
        
    for (let key in data)
    {
            if (data.hasOwnProperty(key)) 
            {
                if (data[key]==null || String(data[key]).trim()==='') 
                {
                    onerror(`Please Enter   ${key} `);
                    return false;
                }
                else if(key==='Email')
                {
                    if(!validateEmail(data[key]))
                    {
                        onerror(`Please Enter  valid ${key} `);
                      return false;
                    }
                }
                else if(key==='Cource'){
                    if(data[key].length==0)
                    {
                        onerror(`Please Select  atleast one ${key} `);
                        return false;
                    }
                }
                else if(key=='MobileNumber')
                {
                    const numberRegex = /^\d{10}$/;
                    if(!numberRegex.test(data[key]))
                    {
                        onerror(`Please Enter  valid ${key} `);
                        return false;
                    }

                }
            }
    }
    return true;

}


