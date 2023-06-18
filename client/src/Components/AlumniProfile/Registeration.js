import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, Form, useActionData } from "react-router-dom";
import Axios from "axios";

export default function RegistrationForm() {
    const navigate = useNavigate();
    const dataLoad = useLoaderData(); 
    //States
    const [first_name,setFirstName] = useState(dataLoad.first_name);
    const [last_name,setLastName] = useState(dataLoad.last_name);
    const [grandfather_name,setGrandFatherName] = useState(dataLoad.grandfather_name);
    const [email,setEmail] = useState(dataLoad.email);
    const [nationality,setNationality] = useState('');
    const [phone1,setPhone1] = useState('');
    const [phone2,setPhone2] = useState('');
    const [region,setRegion] = useState('');
    const [city,setCity] = useState('');
    const [subcity,setSubCity] = useState('');
    const [wereda,setWereda] = useState('');
    const [kebele,setKebele] = useState('');
    const [house_no,setHouseNo] = useState('');
    const [place_of_work,setPlaceOfWork] = useState('');
    const [occupation,setOccupation] = useState('');
    const [image,setImage] = useState('');
    const [linkedIn,setLinkedIn] = useState('');
    const [clicked, setClicked] = useState(false)
    const [valid, setValid] = useState(false)

    //Photo Uploader function
    const uploadPhoto = async()=>{
        try {
            console.log(image)
            const formdata = new FormData();
            formdata.append('avatar',image)
            await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/register/avatar',formdata,
            {headers:{'Content-Type':'multipart/form-data'}})

            navigate('/register/questions',{
                state:{
                    first_name,
                    last_name,
                    grandfather_name,
                    email,
                    nationality,
                    phone_number1: phone1,
                    phone_number_alt: phone2,
                    region,
                    city,
                    subcity,
                    woreda: wereda,
                    kebele,
                    house_no,
                    linkedIn,
                    occupation,
                    placeOfWork: place_of_work,
    
                }
              })
        } catch (error) {
            console.log(error.response)
        }
        
    }

    const validate = ()=>{
      if(first_name&&last_name&&grandfather_name&&email&&nationality
        &&phone1&&phone2&&region&&city&&subcity&&wereda&&kebele&&house_no&&place_of_work&&occupation
        &&image&&linkedIn){
          setValid(true)
        }
    }

    if(clicked){
        uploadPhoto();
    }
       

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <h2>Registration Form</h2>
          <hr />
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" defaultValue={dataLoad.first_name} onChange={(e)=>{setFirstName(e.target.value); validate()}} name="first_name" required/>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" defaultValue={dataLoad.last_name} onChange={(e)=>{setLastName(e.target.value); validate()}} name="last_name" />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="grandFatherName">Grandfather Name</label>
                <input type="text" className="form-control" id="grandFatherName" defaultValue={dataLoad.grandfather_name} onChange={(e)=>{setGrandFatherName(e.target.value); validate()}} name="grandfather_name" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" className="form-control" id="nationality" value= {nationality} onChange={(e)=>{{setNationality(e.target.value); validate()}}} name="nationality"/>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" defaultValue={dataLoad.email} onChange={(e)=>{setEmail(e.target.value); validate()}} name="email" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone1">Phone Number 1</label>
                <input type="text" className="form-control" id="phone1" onChange={(e)=>{setPhone1(e.target.value); validate()}} name="phone1" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone2">Phone Number 2</label>
                <input type="text" className="form-control" id="phone2" onChange={(e)=>{setPhone2(e.target.value); validate()}} name="phone2" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="region">Region</label>
                <input type="text" className="form-control" id="region" onChange={(e)=>{setRegion(e.target.value); validate()}} name="region" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="kebele">Kebele</label>
                <input type="text" className="form-control" id="kebele" onChange={(e)=>{setKebele(e.target.value); validate()}} name="kebele" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" onChange={(e)=>{setCity(e.target.value); validate()}} name="city" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="subcity">Subcity/Zone</label>
                <input type="text" className="form-control" id="subcity" onChange={(e)=>{setSubCity(e.target.value); validate()}} name="subcity" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wereda">Wereda</label>
                <input type="text" className="form-control" id="wereda" onChange={(e)=>{setWereda(e.target.value); validate()}} name="wereda" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="houseNumber">House Number</label>
                <input type="text" className="form-control" id="houseNumber" onChange={(e)=>{setHouseNo(e.target.value); validate()}} name="houseNo" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="placeOfWork">Place of Work</label>
                <input type="text" className="form-control" id="placeOfWork" onChange={(e)=>{setPlaceOfWork(e.target.value); validate()}} name="placeOfWork"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" className="form-control" id="occupation" onChange={(e)=>{setOccupation(e.target.value); validate()}} name = "occupation" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" id="image" onChange={(e)=>{setImage(e.target.files[0]); validate()}} name = "image"/>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="linkedIn">linkedIn</label>
                <input type="text" className="form-control" id="linkedIn" onChange={(e)=>{setLinkedIn(e.target.value); validate()}} name = "linkedIn" />
              </div>
              <button className="btn btn-sm btn-primary" disabled = {valid===false} onClick={()=>setClicked(true)}>Next</button>
            </div>
        </div>
        </div>
        </div>
    )
}
              
export const registrationLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni')
        return res.data.data.alumni
    } catch (error) {
        console.log(error.response)
    }
}
