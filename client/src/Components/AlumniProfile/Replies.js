import { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import classes from './Replies.module.css'
import Axios from 'axios';

const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric", hour:'numeric', hour12:true}
	return new Date(dateString).toLocaleDateString(undefined, options)
}

function Post(props) {
	const navigate = useNavigate();
	
	
	return (
	  <div className={classes.post}>
		<div className={classes.post_header}>
		  <h2>{props.title}</h2>
		  <button className="btn btn-outline-danger btn-sm" onClick={props.handleReportClick}>Report</button>
		</div>
		<p>{props.description}</p>
		<div className={classes.post_footer}>
		  <p>Posted by {props.author} on {props.date}</p>
		  
		</div>
		<button className="btn btn-outline-primary btn-sm" onClick={()=>navigate(`/alumnus/replies/${props.id}`)}>Reply</button>
	  </div>
	);
  }
  
  function Reply(props) {
	
	return (
	  <div key = {props.key} className={classes.reply}>
		<p>{props.description}</p>
		<div className={classes.reply_footer}>
		  <p>Replied by {props.author}</p>
		</div>
	  </div>
	);
  }
  
  function ForumPostWithReplies(props) { 
	return (
	  <div className={classes.forum_post_with_replies}>
		<Post
		id={props.id}
		 title = {props.title}
		 description = {props.description}
		 author = {props.author}
		 date = {props.date}
		 handleReportClick = {props.handleReportClick}
		/>
		<h3>Replies:</h3>
		{props.data.map(reply=>(
		<Reply key = {reply.id}
		description={reply.description}
		author={reply.replier_name}
		  />
		))}
		
		{/* {isReported && <p>Post reported!</p>} */}
	  </div>
	);
  }

//MAIN FUNCTION

export default function Replies(){
	const [data,setData] = useState([{}])
	const location = useLocation();
	const {id} = useParams();
	const dataLoad = useLoaderData()

	//Report
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [userValidation, setUserValidation] = useState(false);

  const handleReportClick = () => {
    setShowReport(true);
  };

  const handleReportSubmit = async(e) => {
	try {
		e.preventDefault();
		const description = reportReason + (customReason ? `: ${customReason}` : "")
		await Axios.post(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/report/${id}`,{
			description
		});
		//console.log(reportReason + (customReason ? `: ${customReason}` : ""));
		setShowReport(false);
		alert("The post has been reported.");
	} catch (error) {
		setUserValidation(true);
	}
   
  };

	useEffect(()=>{
		const replyData = async()=>{
			try {
				const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/reply/${id}`)
				setData(res.data.data.replies)
			} catch (error) {
				console.log(error.response)
			}
		}

		replyData();
		
	},[])
	
	//RETURN
    return(
		<>
		{userValidation && (
			<div class="alert alert-danger alert-dismissible fade show" role="alert">
			<strong>User can't report their own post</strong> 
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		  </div>
		)}
       <ForumPostWithReplies
	   id = {location.state.id?location.state.id:dataLoad.id}
	   title = {location.state.title?location.state.title:dataLoad.title}
	   description = {location.state.description?location.state.description:dataLoad.description}
	   author = {location.state.author?location.state.author:dataLoad.author}
	   date = {location.state.date? location.state.date: formatDate(dataLoad.created_at)}
	   data = {data}
	   handleReportClick = {()=>handleReportClick()}
	   />
		{showReport && (
			 <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center">
			 <div className="card p-3">
			   <h5 className="card-title">Report this post</h5>
			   <form onSubmit={handleReportSubmit}>
				 <div className="form-check">
				   <input
					 className="form-check-input"
					 type="radio"
					 name="reportReason"
					 id="tooViolent"
					 value="Too violent"
					 onChange={(e) => setReportReason(e.target.value)}
					 required
				   />
				   <label className="form-check-label" htmlFor="tooViolent">
					 Too violent
				   </label>
				 </div>
				 <div className="form-check">
				   <input
					 className="form-check-input"
					 type="radio"
					 name="reportReason"
					 id="inappropriate"
					 value="Inappropriate"
					 onChange={(e) => setReportReason(e.target.value)}
					 required
				   />
				   <label className="form-check-label" htmlFor="inappropriate">
					 Inappropriate
				   </label>
				 </div>
				 <div className="form-check">
				   <input
					 className="form-check-input"
					 type="radio"
					 name="reportReason"
					 id="irrelevant"
					 value="Irrelevant"
					 onChange={(e) => setReportReason(e.target.value)}
					 required
				   />
				   <label className="form-check-label" htmlFor="irrelevant">
					 Irrelevant
				   </label>
				 </div>
				 <div className="form-check">
				   <input
					 className="form-check-input"
					 type="radio"
					 name="reportReason"
					 id="other"
					 value="Other"
					 onChange={(e) => {
					   setReportReason(e.target.value);
					   setCustomReason("");
					 }}
					 required
				   />
				   <label className="form-check-label" htmlFor="other">
					 Other
				   </label>
				 </div>
				 {reportReason === "Other" && (
				   <div className="form-floating mb-3">
					 <textarea
					   className="form-control"
					   placeholder="Please provide more details"
					   value={customReason}
					   onChange={(e) => setCustomReason(e.target.value)}
					   required
					 ></textarea>
					 <label htmlFor="customReason">Custom reason</label>
				   </div>
				 )}
				 <button type="submit" className="btn btn-danger">
				   Submit
				 </button>
				 <button
				   type="button"
				   className="btn btn-link"
				   onClick={() => setShowReport(false)}
				 >
				   Cancel
				 </button>
			   </form>
			</div>
			</div>
		)}
       
	   </>
    )
}


export const RepliesLoader = async({params})=>{
	const {id} = params
	try {
		const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/${id}`)
		console.log(res.data.data.post)
		return(res.data.data.post)
	} catch (error) {
		console.log(error.response)
	}
}