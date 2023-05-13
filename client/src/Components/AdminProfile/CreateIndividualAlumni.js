import React, { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AlumniAccountCreation() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [grandfather_name, setGrandfatherName] = useState('');
  const [gender, setGender] = useState('');
  const [gpa, setGpa] = useState('');
  const [graduation_year, setGraduationYear] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
        await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/admin/alumniaccountmanual',{
        first_name,
        last_name,
        grandfather_name,
        gender,
        gpa,
        graduation_year,
        email,
        department
    })
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setFirstName('')
    setLastName('')
    setGrandfatherName('')
    setGender('')
    setEmail('')
    setDepartment('')
    setGpa('')
    setGraduationYear('')
    }catch(error){
        console.log(error.response)
    }
    
  };

  return (
    <div className="container">
    
      <h1>Create Alumni Account</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="grandfatherName" className="form-label">Grandfather Name</label>
          <input type="text" className="form-control" id="grandfatherName" value={grandfather_name} onChange={(e) => setGrandfatherName(e.target.value)} required />
        </div>
        <label className="form-label">Gender</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
            value='Male' onClick={(e)=>setGender(e.target.value)}/>
            <label class="form-check-label" for="flexRadioDefault1">
            Male
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
        value='Female' onClick={(e)=>setGender(e.target.value)}/>
        <label class="form-check-label" for="flexRadioDefault2">
            Female
        </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="gpa" className="form-label">GPA</label>
          <input type="number" className="form-control" id="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="graduate" className="form-label">Year of Graduation</label>
          <input type="text" className="form-control" id="graduate" value={graduation_year} onChange={(e) => setGraduationYear(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          Account has been successfully created and sent.
        </div>
      )}
    </div>
  );
}

export default AlumniAccountCreation;