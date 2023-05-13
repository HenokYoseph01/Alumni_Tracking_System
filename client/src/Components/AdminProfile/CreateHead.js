import React, { useState } from 'react';
import Axios from 'axios'
function HeadOfSchoolForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [grandfather_name, setGrandfatherName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

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
        alert('Head of School account created successfully!');
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
    <div className="container mt-4">
      <h3>Create Head of School Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
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
          <label htmlFor="lastName">Last Name:</label>
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
          <label htmlFor="grandfatherName">Grandfather Name:</label>
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
          <label htmlFor="phoneNumber">Phone Number:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HeadOfSchoolForm;
