import { Link, NavLink, redirect, useLoaderData, useNavigate, useParams } from "react-router-dom"
import Axios from "axios"
import classes from '../AlumniProfile/Forum.module.css'

export default function ViewPost(){
    const data = useLoaderData();
    const {id} = useParams();

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour:'numeric', hour12:true}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return(
        <>
        <div className={classes.forum_container}>
                <div className={classes.post_container}>
                    <h3 className={classes.post_title}>{data.title}</h3>
                    <p className={classes.post_description}>{data.description}</p>
                    <p className={classes.post_author}>Author:{data.author}</p>
                    <p className={classes.post_date}>{formatDate(data.created_at)}</p>
                </div>
        </div>
        </>
        
    )
}

export const ViewPostLoader = async({params})=>{
    try {
        const {id} = params
        const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/admin/moderation/${id}`)
        return res.data.data.post;
    } catch (error) {
        console.log(error.response)
    }
}