import React,{useEffect, useRef, useState} from 'react';
import Axios from 'axios';
import AlumniProfile from '../AlumniProfile/AlumniProfile'
import { Form, redirect, useActionData, useFetcher } from 'react-router-dom';




function Login() {
  
  const data = useActionData();
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting"

  const formRef = useRef()

  useEffect(()=>{
    if(!isSubmitting){
      formRef.current.reset()
    }
  },[isSubmitting])

  
  return (
    <>
    {data&&data.error&&<p>Try Again</p>}
    <fetcher.Form method="post" action="/login" ref={formRef}>
    <label >Email:</label>
    <input type="text" name="name"  />
    <label >Password:</label>
    <input type="password" name="password" />
    <button>Submit</button>
    </fetcher.Form>
    </>
  );
}

export const loginAction = async({request}) => {

  try {
    const data = await request.formData();
  
    const email = data.get('name')
    const password = data.get('password')
  
  
    const res = await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/login',{
      email,
      password
   },
   );
   Axios.defaults.headers.common = {'Authorization':`Bearer ${res.data.userToken}`}

    const directionAlumni = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni')
    console.log(res.data.role)
    if(res.data.role === 'alumni'){
      if(!directionAlumni.data.data.alumni.registered){
        return redirect('/register')
      }else{
        return redirect('/alumnus/profile')
      }
    }else if(res.data.role === 'head'){
      console.log('working')
      return redirect('/head/profile')
    }else{
      console.log('Working')
      return redirect('/admin/profile')
    }
    

    } catch (error) {
      return{error:error.response.data.error}
    }
  
}

export default Login;