import { useState } from 'react';
import Axios from 'axios'
export default function AdminAccountCreation() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [grandfather_name, setGrandfatherName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform account creation logic here
    try {
        await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/admin/adminaccount',{
            first_name,
            last_name,
            grandfather_name,
            phone_number,
            email
        })
        // Reset form
        setFirstName('');
        setLastName('');
        setGrandfatherName('');
        setPhoneNumber('');
        setEmail('');
        // Show success alert
        const successAlert = document.getElementById('success-alert');
        successAlert.classList.remove('d-none');
        setTimeout(() => {
        successAlert.classList.add('d-none');
        }, 3000);
    } catch (error) {
        console.log(error.response)
    }
    
  };

  return (
    <div className="container mt-3">
      <h3>Admin Account Creation</h3>
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
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
        <div id="success-alert" className="alert alert-success mt-3 d-none" role="alert">Admin account created successfully!</div>
      </form>
    </div>
  );
}
