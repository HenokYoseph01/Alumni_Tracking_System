import React, { useState } from 'react';
import Axios from 'axios'
import '../components.css'
function HeadOfSchoolForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [grandfather_name, setGrandfatherName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
        await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/admin/headaccount',{
            first_name,
            last_name,
            grandfather_name,
            phone_number,
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
        setPhoneNumber('')
        setEmail('')
        setDepartment('')
    } catch (error) {
        console.log(error.response)
    }
    
  };

  return (
    <div style={myStyle}>
      <h1>Create Head of School Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={first_name}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label mt-2">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={last_name}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grandfatherName" className="form-label mt-2">Grandfather Name:</label>
          <input
            type="text"
            className="form-control"
            id="grandfatherName"
            value={grandfather_name}
            onChange={(event) => setGrandfatherName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label mt-2">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            value={phone_number}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label mt-2">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label mt-2">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          Account has been successfully created and sent.
        </div>
      )}
    </div>
  );
}
const myStyle = {
  margin: "40px 380px",
};
export default HeadOfSchoolForm;
