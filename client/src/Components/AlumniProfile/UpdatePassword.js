import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


const ChangePasswordForm = () => {
  //Get navigation route
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSucessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
     setErrorMessage('Passwords do not match');
      setTimeout(()=>{
        setErrorMessage('');

      },5000)
      return;
    }

    // Perform password change logic here
    await Axios.patch('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/changepassword',
    {newPassword})
    // Reset form fields
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    setSucessMessage('Password successfully changed, you will now be redirected to the login page')

    setTimeout(()=>{
        //Navigate to login page after 5 seconds
        navigate('/login',{replace:true})        
      },5000)
    

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Change Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="newPassword" className='form-label'>New Password</label>
                  <input
                    className="form-control mt-2 border border-dark border-2"
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className='form-label mt-2'>Confirm New Password</label>
                  <input
                    className="form-control mt-2 border border-dark border-2"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="success alert-success">{successMessage}</div>}

                <button className="btn btn-primary btn-block mt-3" type="submit">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
