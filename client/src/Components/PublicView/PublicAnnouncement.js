import { useLoaderData } from "react-router-dom"
import Axios from "axios";
export default function ViewPublicAnnouncement(){
    const data = useLoaderData();

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return(
        <div className="container" style={{marginTop:30}}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    )
}

export const viewPublicAnnouncementLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/guest/event')
        console.log(res.data)
        return res.data.data.events;
    } catch (error) {
        console.log(error.response)
    }
}