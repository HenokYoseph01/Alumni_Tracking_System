import {useEffect,useState} from 'react'
import Axios from 'axios'
import Login from './Components/Login/Login';

function App(){
  const[email, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [backendData, setBackendData] = useState({});

  const loginUser = async()=>{
    try{
      const x = await Axios.post('http://localhost:5000/api/v1/login',{
      email,
      password
    })
      Axios.defaults.headers.common = {'Authorization': `Bearer ${x.data.userToken}`}
      console.log(x)
    console.log('SUCCESSFULLY LOGGED IN')
    }catch(error){
      (console.log('OOPS'))
    }
    
  }

  const showAlumni = async()=>{
    try {
      const alumni = await Axios.get('http://localhost:5000/api/v1/alumni')
      setBackendData(alumni.data.data.alumni)
    } catch (error) {
      console.log('OOPS')
    }
  }

  return(
    <Login/>
  )
}

export default App