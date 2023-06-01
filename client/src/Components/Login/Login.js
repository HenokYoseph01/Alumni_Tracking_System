import React,{useEffect, useRef, useState} from 'react';
import Axios from 'axios';
import AlumniProfile from '../AlumniProfile/AlumniProfile'
import { Form, redirect, useActionData, useFetcher,useNavigate } from 'react-router-dom';




function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {    
      console.log(email,password)
      const res = await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/login',{
        email,
        password
     },
     );
     Axios.defaults.headers.common = {'Authorization':`Bearer ${res.data.userToken}`}
     console.log(res)
      const directionAlumni = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni')
      if(res.data.role === 'alumni'){
        if(!directionAlumni.data.data.alumni.registered){
          return navigate('/register')
        }else{
          console.log('working')
          return navigate('/alumnus/profile')
        }
      }else if(res.data.role === 'head'){
        console.log('working')
        return navigate('/head/profile')
      }else{
        console.log('Working')
        return navigate('/admin/profile')
      }
      
  
      } catch (error) {
        setError(true);
      }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-light">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  Invalid credentials. Please try again.
                </div>
              )}
              <form>
                <div className={`form-group ${error ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={`form-group ${error ? 'has-error' : ''}`}>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={handleLogin} className="btn btn-primary btn-block mt-5">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;


