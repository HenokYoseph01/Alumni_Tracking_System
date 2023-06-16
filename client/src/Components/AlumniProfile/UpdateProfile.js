import React, { useState } from 'react';
import Axios from "axios";
import { useLoaderData } from 'react-router-dom';

const UpdateAlumniProfile = () => {
    //Get Loader data
    const dataLoad = useLoaderData();

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
    if(image){
        console.log('Image')
    }else{
        
    }

  };

  return (
    <div className="container mt-3">
    <form>
      <div className="form-group">
        <label htmlFor='firstName' className="form-label">First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={first_name}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='lastName' className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={last_name}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='grandfatherName' className="form-label">Grandfather Name:</label>
        <input
          type="text"
          className="form-control"
          name="grandfatherName"
          value={grandfather_name}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='email' className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='phoneNumber' className="form-label">Phone Number:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          value={phone1}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='phoneNumberAlt' className="form-label">Phone Number 2:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumberAlt"
          value={phone2}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='linkedIn' className="form-label">linkedIn:</label>
        <input
          type="text"
          className="form-control"
          name="linkedIn"
          value={linkedIn}
          
        />
      </div>

      <div className="form-group mt-2">
        <label className="nationality">Nationality:</label>
        <input
          type="text"
          className="form-control"
          name="nationalty"
          value={nationality}
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='region' className="form-label">Region:</label>
        <input
          type="text"
          className="form-control"
          name="region"
          value={region}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='city' className="form-label">City:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='subcity' className="form-label">Sub City:</label>
        <input
          type="text"
          className="form-control"
          name="subcity"
          value={subcity}
          
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='occupation' className="form-label">Occupation:</label>
        <input
          type="text"
          className="form-control"
          name="occupation"
          value={occupation}
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor='workplace' className="form-label">Place of Work:</label>
        <input
          type="text"
          className="form-control"
          name="workplace"
          value={place_of_work}
          
        />
        
      </div>

      <div className="form-group mt-2">
        <label htmlFor='image' className="form-label">Picture:</label>
        <input
          type="file"
          className="form-control"
          name="image"
          onChange = {(e)=>setImage(e.target.files[0])}
          
        />
        
      </div>
    
      
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>Update</button>
    </form>
    
    </div>
    
  );
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
