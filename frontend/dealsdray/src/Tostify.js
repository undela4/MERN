
import toast, { Toaster } from 'react-hot-toast';

export const  onsuccess=(msg)=>{
    toast.success(msg)
}


export const  onerror=(msg)=>{
    toast.error(msg)
}
