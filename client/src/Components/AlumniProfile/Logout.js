import { useEffect } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const navigate = useNavigate();

    useEffect(()=>{
        try {
           Axios.defaults.headers.common = {'Authorization':null}
           navigate('/',{replace:true});

        } catch (error) {
            console.log(error)
        }
        
    })
    return(
        <>
        </>
    )
}