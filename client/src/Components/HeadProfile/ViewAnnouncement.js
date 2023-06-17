import { redirect, useLoaderData, useNavigate } from "react-router-dom"
import Axios from "axios";
import { useState } from "react";
export default function ViewAnnouncement(){
    const data = useLoaderData();
    const navigate = useNavigate();
    const [deleteAlert,setDeleteAlert] = useState(false)

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    
    const deleteEvent = async(id)=>{
      try {
        console.log(id)
        console.log(deleteAlert)
        await Axios.delete(`https://alumni-track-system-kr9h.onrender.com/api/v1/head/event/${id.toString()}`)
        setDeleteAlert(true)
        console.log('check')
        setTimeout(()=>{
          navigate(0)
        },5000)
        
      } catch (error) {
        console.log(error.response)
      }
    }
    return(
        <div className="container" style={{marginTop:30}}>
          {deleteAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Announcement has been deleted
          <button type="button" className="btn-close" onClick={() => setDeleteAlert(false)}></button>
        </div>
      )}
      <div className="row">
        {data.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{event.category}</h6>
                <p className="card-text">{event.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Event Date: </strong>{formatDate(event.event_date)}</li>
                  <li className="list-group-item"><strong>Time Start: </strong>{event.time_start}</li>
                  <li className="list-group-item"><strong>Time End: </strong>{event.time_end}</li>
                  <li className="list-group-item"><strong>Venue: </strong>{event.venue}</li>
                  <li className="list-group-item"><strong>Host: </strong>{event.host}</li>
                </ul>
                <button className="btn btn-warning me-2" onClick={()=>navigate(
                  `/head/announcement/edit/${event.id}`,{
                    state:{
                      name:event.name,
                      description:event.description,
                      category: event.category,
                      event_date: event.event_date,
                      time_start: event.time_start,
                      time_end: event.time_end,
                      venue: event.venue,
                      host: event.host
                    }
                  })
              }>Edit Event</button>
                <button className="btn btn-danger" onClick={()=>deleteEvent(event.id)}>Delete Event</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    )
}

export const viewAnnouncementLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/head/event')
        console.log(res.data)
        return res.data.data.events;
    } catch (error) {
        console.log(error.response)
    }
}