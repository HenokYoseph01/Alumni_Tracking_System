import { Link, NavLink, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Axios from "axios"
import classes from './Forum.module.css'
import { useState } from "react";
export default function AuthorForum(){
    const data = useLoaderData();
    
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour:'numeric', hour12:true}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    //Delete Post Handler
    const [showAlert, setShowAlert] = useState(false);
    const deleteHandler = async(id)=>{
        try {
            await Axios.delete(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/${id}`)
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
            return navigate('/alumnus/forum/me')
        } catch (error) {
            console.log(error.response)
        }
    }
    return(
        <>
        {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Post has been deleted
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}
      <div>
        <div className={classes.forum_container}>
            <h2>My Posts</h2>
            {data.map(post=>(
                <div key={post.id} className={classes.post_container}>
                    <h3 className={classes.post_title}>{post.title}</h3>

                    <p className={classes.post_description}>{post.description}</p>
                    <Link to={`author/${post.id.toString()}`} className={classes.post_author}>Author:{post.author}</Link>
                    <p className={classes.post_date}>{formatDate(post.created_at)}</p>
                    <button className={classes.button} onClick={()=>navigate(`/alumnus/forum/${post.id}`,{state:{
                        id:post.id.toString(),
                        title: post.title,
                        author: post.author,
                        description: post.description,
                        date:formatDate(post.created_at) }})}>
                        Replies</button>
                    <button className="btn btn-warning btn-sm" onClick={()=>navigate('/alumnus/forum/me/edit',{
                        state:{
                            id:post.id.toString(),
                            title: post.title,
                            description: post.description
                        }
                    })}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={()=>deleteHandler(post.id)}>Delete</button>
                </div>
            ))}
            </div>
        </div>
        </>
        
    )
}

export const authorForumLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/me')
        return res.data.data.forums;
    } catch (error) {
        throw Error(error.message)
    }
}