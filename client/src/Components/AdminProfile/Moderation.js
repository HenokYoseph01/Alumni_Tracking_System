import { useState } from 'react';
import Axios from 'axios'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
function Moderation() {
  let key = 0;
  const reportedForums = useLoaderData();
  const navigate = useNavigate()
  const handleWarning = async(id) => {
    try {
        await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/admin/moderation/warning/${id}`)
        navigate('/admin/moderate')
    } catch (error) {
        console.log(error.response)
    }
  };

  const handleBan = async(id) => {
        try {
            await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/admin/moderation/ban/${id}`)
            alert('Alumni has been banned from the forum')
            navigate('/admin/moderate')
        } catch (error) {
            console.log(error.response)
        }
  };

  const handleDelete = async(id) => {
        try {
          await Axios.delete(`https://alumni-track-system-kr9h.onrender.com/api/v1/admin/moderation/delete/${id}`)
          alert('The post has been deleted')
          navigate('/admin/moderate')
        } catch (error) {
            console.log(error.response)
        }
  };

  return (
    <div style={myStyle}>
      <h2>Reported Forums</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Reporter</th>
            <th scope="col">Reason</th>
            <th scope="col"># of Warnings</th>
            <th scope="col">Issue Warning</th>
            <th scope="col">Issue Ban</th>
            <th scope="col">Delete Forum</th>
          </tr>
        </thead>
        <tbody>
          {reportedForums.map((forum) => (
            <tr key={key++}>
              <td><NavLink to={`post/${forum.forum_id.toString()}`} style={{textDecoration:'none',color:'black'}}>{forum.title}</NavLink></td>
              <td>{forum.author_name}</td>
              <td>{forum.reporter_name}</td>
              <td>{forum.description}</td>
              <td>{forum.report_warnings}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleWarning(forum.alumni_id)}
                  disabled = {forum.report_warnings===3} 
                >
                  Issue Warning
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleBan(forum.alumni_id)}
                  disabled = {forum.report_warnings<3||forum.banned} 
                >
                  Issue Ban
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleDelete(forum.forum_id)}
                >
                  Delete Forum
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}
const myStyle = {
  margin: "40px 350px",
  width:''
};
export default Moderation

export const ModerationLoader = async()=>{
    try {
      //Get Moderation List
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/admin/moderation')
        return res.data.data.moderation_list
    } catch (error) {
        console.log(error.response)
    }
}