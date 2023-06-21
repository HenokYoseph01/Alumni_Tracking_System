import { useEffect } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Logout(){
    const navigate = useNavigate();

    useEffect(()=>{
        try {
            
            document.cookie = "id=; expiresIn=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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