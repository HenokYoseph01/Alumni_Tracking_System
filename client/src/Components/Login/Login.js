import React,{useState} from 'react';
import Axios from 'axios';
import AlumniProfile from '../AlumniProfile/AlumniProfile'


function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginUser = ()=>{ 
        
          console.log('Loading')
          Axios.post('https://alumni-tracking-system-backend.vercel.app/api/v1/login',{
          email,
          password
        }).then(res=>{
          console.log(res)
          Axios.defaults.headers.common = {'Authorization': `Bearer ${res.data.userToken}`}
        }).catch(err=>{
          console.log(err)
        })
        

       // console.log('SUCCESSFULLY LOGGED IN')     
      }

      const getData = ()=>{
        console.log('Loading')
        Axios.get('https://alumni-tracking-system-backend.vercel.app/api/v1/alumni')
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})
      }


  return (
    <>
    <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
    <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
    <button onClick={loginUser}>Submit</button>
    <button onClick={getData}>Show</button>
    </>
  );
}

export default Login;