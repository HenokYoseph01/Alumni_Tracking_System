import { Form, NavLink, redirect, useLocation, useNavigate } from "react-router-dom";
import Axios from 'axios'
import { useState } from "react";

export default function EditForum(){
    const location = useLocation();
    const navigate = useNavigate();
    const [title,setTitle] = useState(location.state.title)
    const [description,setDescription] = useState(location.state.description)

    //Edit Post
    const editPost = async()=>{
        try {
            await Axios.patch(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/${location.state.id}`,{
                title,
                description
            })
            navigate('/alumnus/forum/me')
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div className="container">
        <NavLink to='/alumnus/forum/me'>My Posts</NavLink>    
        <h2>Edit Post</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              onChange={(e)=>setTitle(e.target.value)}
              value = {title}
              required
              name = "title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
              required
              name = "description"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={editPost}>
            Submit
          </button>
      </div>
    );
}

