import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Questionnaire() {
    const location = useLocation();
    const data = location.state
    const navigate = useNavigate();
    const [category_of_work,setCategory] = useState('')
    const [salary,setSalary] = useState('')
    const [satisfaction,setSatisfaction] = useState('')
    const [attainment,setAttainment] = useState('')
    const [valid,setValid] = useState(false)

    const validate = ()=>{
      if(category_of_work&&salary&&satisfaction&&attainment){
          setValid(true)
        }else{
          setValid(false)
        }
    }

    //Post data
    const submitData = async(e)=>{
        e.preventDefault();
        console.log(data)
        try {
            await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/register',{
                first_name: data.first_name,
                last_name: data.last_name,
                grandfather_name: data.grandfather_name,
                email: data.email,
                phone_number1: data.phone_number1,
                phone_number_alt:data.phone_number_alt,
                nationality: data.nationality,
                region: data.region,
                city: data.city,
                subcity: data.subcity,
                kebele: data.kebele,
                woreda: data.woreda,
                house_no: data.house_no,
                occupation: data.occupation,
                workname: data.placeOfWork,
                linkedIn : data.linkedIn,
                category_of_work,
                salary,
                satisfaction,
                attainment,
            })
            navigate('/alumnus/profile',{replace:true})
        } catch (error) {
            console.log(error.response)
        }
    }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <h2>Registration Form</h2>
          <hr />
          <form>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="question1">Would you categorize your occupation as your graduating department based?(Networking, Web Dev, AI, etc.)</label>
                <select type="text" className="form-control" id="question1" value={category_of_work} onChange={(e)=>{setCategory(e.target.value); validate()}} style={{borderColor:`${category_of_work?'black':'red'}`}}>
                <option selected>Choose</option>
                <option value="tech">Yes</option>
                <option value="non-tech">No</option>
                </select>
              </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="satisifaction">How satisfied are you with your current job(rate out of 5)?</label>
                <input type="number" className="form-control" id="satisfaction" readonly value={satisfaction} min={1} max={5} onChange={(e)=>{setSatisfaction(e.target.value); validate()}} style={{borderColor:`${satisfaction?'black':'red'}`}} />
              </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="attain">Would you say the university helped you attain your current job?</label>
                <select className="form-control" id="attain" value={attainment} onChange={(e)=>{setAttainment(e.target.value); validate()}} style={{borderColor:`${attainment?'black':'red'}`}} >
                    <option selected>Choose</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              <div className="row">
              <div className="col mb-3">
                <label htmlFor="salary">Salary</label>
                <input type="number" className="form-control" id="salary" value={salary} onChange={(e)=>{setSalary(e.target.value); validate()}}
                style={{borderColor:`${salary?'black':'red'}`}} />
              </div>
              
              <button className="btn btn-sm btn-primary" disabled={valid===false} onClick={submitData}>Submit</button>
            </div>
            </div>
            </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}
              
