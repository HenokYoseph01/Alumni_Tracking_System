import React from "react";
import { useLoaderData, useNavigate, Form, useActionData } from "react-router-dom";
import Axios from "axios";

export default function RegistrationForm() {
    const navigate = useNavigate();
    const dataLoad = useLoaderData();
    const dataAction = useActionData();
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <h2>Registration Form</h2>
          <hr />
          <Form method="post" action="/register">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" defaultValue={dataLoad.first_name} name="first_name"/>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" defaultValue={dataLoad.last_name} name="last_name" />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="grandFatherName">Grandfather Name</label>
                <input type="text" className="form-control" id="grandFatherName" defaultValue={dataLoad.grandfather_name} name="grandfather_name" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" className="form-control" id="nationality" name="nationality"/>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" defaultValue={dataLoad.email} name="email" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone1">Phone Number 1</label>
                <input type="text" className="form-control" id="phone1" name="phone1" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone2">Phone Number 2</label>
                <input type="text" className="form-control" id="phone2" name="phone2" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="region">Region</label>
                <input type="text" className="form-control" id="region" name="region" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="kebele">Kebele</label>
                <input type="text" className="form-control" id="kebele" name="kebele" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" name="city" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="subcity">Subcity/Zone</label>
                <input type="text" className="form-control" id="subcity" name="subcity" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="wereda">Wereda</label>
                <input type="text" className="form-control" id="wereda" name="wereda" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="houseNumber">House Number</label>
                <input type="text" className="form-control" id="houseNumber" name="houseNo" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="placeOfWork">Place of Work</label>
                <input type="text" className="form-control" id="placeOfWork" name="placeOfWork"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" className="form-control" id="occupation" name = "occupation" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" id="image" name = "image"/>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="linkedIn">linkedIn</label>
                <input type="text" className="form-control" id="linkedIn" name = "linkedIn" />
              </div>
              <button className="btn btn-sm btn-primary">Next</button>
            </div>
        </Form>
        </div>
        {dataAction&&dataAction.data&&(navigate('/register/questions',{
                state:{
                    first_name: dataAction.first_name,
                    last_name: dataAction.last_name,
                    grandfather_name: dataAction.grandfather_name,
                    email: dataAction.email,
                    nationality: dataAction.nationality,
                    phone_number1: dataAction.phone1,
                    phone_number_alt: dataAction.phone2,
                    region: dataAction.region,
                    city: dataAction.city,
                    subcity: dataAction.subcity,
                    woreda: dataAction.wereda,
                    kebele: dataAction.kebele,
                    house_no: dataAction.houseNo,
                    avatar: dataAction.image,
                    linkedIn: dataAction.linkedIn,
                    occupation: dataAction.occupation,
                    placeOfWork: dataAction.placeOfWork,

                }
              }))}
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

export const registrationAction = async({request})=>{
    try {
        const res = await request.formData();
        const data = {}
        data.first_name = res.get('first_name')
        data.last_name = res.get('last_name')
        data.grandfather_name = res.get('grandfather_name')
        data.nationality = res.get('nationality')
        data.phone1 = res.get('phone1')
        data.phone2 = res.get('phone2')
        data.email = res.get('email')
        data.region = res.get('region')
        data.kebele = res.get('kebele')
        data.city = res.get('city')
        data.subcity = res.get('subcity')
        data.wereda = res.get('wereda')
        data.houseNo = res.get('houseNo')
        data.placeOfWork = res.get('placeOfWork')
        data.occupation = res.get('occupation')
        data.image = res.get('image')
        data.linkedIn = res.get('linkedIn')
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}