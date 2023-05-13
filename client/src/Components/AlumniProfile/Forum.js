import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom"
import Axios from "axios"
import classes from './Forum.module.css'


export default function Forum(){
    const data = useLoaderData();

    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour:'numeric', hour12:true}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return(
        <>
        <nav>
            <NavLink to="/alumnus/forum/me">My Posts</NavLink>
            <NavLink to="/alumnus/forum/create" style={{marginLeft:20}}>Create</NavLink>
        </nav>
        <div className={classes.forum_container}>
            <h2>Discussion Forum</h2>
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
                </div>
            ))}
        </div>
        </>
        
    )
}

export const forumLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum')
        return res.data.data.forums;
    } catch (error) {
        throw Error(error.message)
    }
}