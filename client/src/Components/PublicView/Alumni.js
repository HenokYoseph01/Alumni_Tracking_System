import Axios from 'axios'
import { useEffect, useState } from 'react'
import {Form, useActionData} from 'react-router-dom'
import '../components.css'

export default function Alumni(){
    
    const data = useActionData()
    return(
        <div>
            <Form method="post" action="/alumni">
            <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Select Batch</h5>
                <div className="form-group">
                  <label htmlFor="dropdown">Select an option:</label>
                  <select className="form-control" id="dropdown" name="Year">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
                <button className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </Form>
            <br/>

            {data&& <div className="container">
      <div className="row">
        {data.map((alumni) => (
          <div className="col-md-4" key={alumni.id}>
            <div className="card">
              <img src={alumni.photo_url} className="card-img-top" alt="Alumni" style={{height:"auto",width:"auto",maxHeight:'400px','minHeight':"400px"}} />
              <div className="card-body">
                <h5 className="card-title">{alumni.first_name} {alumni.last_name}</h5>
                <p className="card-text">{alumni.grandfather_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>}
        </div>
    )
}

export const alumniActon = async({request})=>{
    try {
        const data = await request.formData();
        const year = data.get('Year')
        console.log(year)
        const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/guest/alumni/${year}`)
        const resData = res.data.data.alumni
        return resData;
    } catch (error) {
        console.log(error.response)
    }
}


