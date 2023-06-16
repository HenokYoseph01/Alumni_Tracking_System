import React, { useState } from 'react';
import Axios from 'axios'
import '../css/all.css'
import { useNavigate } from 'react-router-dom';
function AlumniAccountCreationPage() {
  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('list',file)
    await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/admin/alumniaccount',formdata,
    {headers:{'Content-Type':'multipart/form-data'}})
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return navigate('/admin/create/alumni');
  };

  return (
    <div style={myStyle}>
        {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          Accounts have been successfully created and sent.
        </div>
      )}
      <h1>Account Creation Page</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file">Upload File:</label>
          <br/>
          <input type="file" className="form-control-file" id="file" onChange={handleFileChange} />
        </div>
        <br/>
        <button type="submit" className="button">Submit</button>
      </form>
      
    </div>
  );
}

const myStyle = {
  margin:'40px 380px'
};

export default AlumniAccountCreationPage;
