import Axios from 'axios'
import { useEffect, useState } from 'react'
import {Form, useActionData} from 'react-router-dom'
import classes from './Alumni.module.css'


export default function Alumni(){
    
    const data = useActionData()
    return(
        <div>
            <h2>Alumni</h2>
            <Form method="post" action="/alumni">
            <select name="Year">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
            <button>Search</button>
            </Form>
            <br/>

            {data&& <div className={classes.container}>{data.map(alumni=>(
                <div key={alumni.id} style={{}}>
                    <img src={alumni.photo_url} width="300" height="300" alt="Profile"/>
                    <p>{alumni.first_name} {alumni.last_name} {alumni.grandfather_name}</p>
                </div>
            ))}</div>}
        </div>
    )
}

export const alumniActon = async({request})=>{
    try {
        const data = await request.formData();
        const year = data.get('Year')
        const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/guest/alumni/${year}`)
        const resData = res.data.data.alumni
        return resData;
    } catch (error) {
        console.log(error.response)
    }
}