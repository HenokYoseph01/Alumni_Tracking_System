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
    
    if(res.data.role === 'alumni'){
      if(!directionAlumni.data.data.alumni.registered){
        return redirect('/register')
      }else{
        return redirect('/alumnus/profile')
      }
    }
    

    } catch (error) {
      console.log(error.response)
      
    }
  
}

export default Login;