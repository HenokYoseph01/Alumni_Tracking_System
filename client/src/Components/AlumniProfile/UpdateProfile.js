import React, { useState } from 'react';
import Axios from "axios";
import { useLoaderData, useNavigate } from 'react-router-dom';
import '../components.css'
const UpdateAlumniProfile = () => {
    //Get Loader data
    const dataLoad = useLoaderData();
    const navigate = useNavigate();

    //Set up needed states
    const [first_name,setFirstName] = useState(dataLoad.first_name);
    const [last_name,setLastName] = useState(dataLoad.last_name);
    const [grandfather_name,setGrandFatherName] = useState(dataLoad.grandfather_name);
    const [email,setEmail] = useState(dataLoad.email);
    const [nationality,setNationality] = useState(dataLoad.nationality);
    const [phone1,setPhone1] = useState(dataLoad.phone_number);
    const [phone2,setPhone2] = useState(dataLoad.phone_number_alt);
    const [region,setRegion] = useState(dataLoad.region);
    const [city,setCity] = useState(dataLoad.city);
    const [subcity,setSubCity] = useState(dataLoad.subcity);
    const [place_of_work,setPlaceOfWork] = useState(dataLoad.place_of_work);
    const [occupation,setOccupation] = useState(dataLoad.occupation);
    const [image,setImage] = useState('');
    const [linkedIn,setLinkedIn] = useState(dataLoad.linkedin)



  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform update operation with the updated person object
    console.log(place_of_work)
    if(image){
        const formdata = new FormData();
        formdata.append('avatar',image)
        await Axios.patch('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/profile/avatar',
        formdata,{headers:{'Content-Type':'multipart/form-data'}})    
    }
    await Axios.patch('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni',{
        first_name,
        last_name,
        grandfather_name,
        email,
        nationality,
        phone_number: phone1,
        phone_number_alt: phone2,
        linkedIn,
        city,
        subcity,
        region,
        workname: place_of_work,
        occupation
    })
    navigate('/alumnus/profile',{replace:true})

  };

  return (
    <div style={myStyle}>
    <form>
      <div className="form-group">
        <label htmlFor='firstName' className="form-label">First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          defaultValue={first_name}
          onChange = {(e)=>setFirstName(e.target.value)}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='lastName' className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          defaultValue={last_name}
          onChange = {(e)=>setLastName(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='grandfatherName' className="form-label">Grandfather Name:</label>
        <input
          type="text"
          className="form-control"
          name="grandfatherName"
          defaultValue={grandfather_name}
          onChange = {(e)=>setGrandFatherName(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='email' className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          name="email"
          defaultValue={email}
          onChange = {(e)=>setEmail(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='phoneNumber' className="form-label">Phone Number:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          defaultValue={phone1}
          onChange = {(e)=>setPhone1(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='phoneNumberAlt' className="form-label">Phone Number 2:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumberAlt"
          defaultValue={phone2}
          onChange = {(e)=>setPhone2(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='linkedIn' className="form-label">linkedIn:</label>
        <input
          type="text"
          className="form-control"
          name="linkedIn"
          defaultValue={linkedIn}
          onChange = {(e)=>setLinkedIn(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label className="nationality">Nationality:</label>
        <input
          type="text"
          className="form-control"
          name="nationalty"
          defaultValue={nationality}
          onChange = {(e)=>setNationality(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='region' className="form-label">Region:</label>
        <input
          type="text"
          className="form-control"
          name="region"
          defaultValue={region}
          onChange = {(e)=>setRegion(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='city' className="form-label">City:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          defaultValue={city}
          onChange = {(e)=>setCity(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='subcity' className="form-label">Sub City:</label>
        <input
          type="text"
          className="form-control"
          name="subcity"
          defaultValue={subcity}
          onChange = {(e)=>setSubCity(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='occupation' className="form-label">Occupation:</label>
        <input
          type="text"
          className="form-control"
          name="occupation"
          defaultValue={occupation}
          onChange = {(e)=>setOccupation(e.target.value)}

        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='workplace' className="form-label">Place of Work:</label>
        <input
          type="text"
          className="form-control"
          name="workplace"
          defaultValue={place_of_work}
          onChange = {(e)=>setPlaceOfWork(e.target.value)}

        />
        
      </div>

      <div className="form-group mt-2">
        <label htmlFor='image' className="form-label">Image:</label>
        <input
          type="file"
          className="form-control"
          name="image"
          onChange = {(e)=>setImage(e.target.files[0])}
          
        />
        
      </div>
    
      
      <button className="button" onClick={handleSubmit}>Update</button>
    </form>
    
    </div>
    
  );
};
const myStyle = {
  margin: "40px 380px",
};

export const updateProfileLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/full')
        return res.data.data.alumni.finalInfo
    } catch (error) {
        console.log(error.response)
    }
}

export default UpdateAlumniProfile;
