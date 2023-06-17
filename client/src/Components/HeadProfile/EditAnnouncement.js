import { Form, redirect, useLocation, useNavigate, useParams } from "react-router-dom"
import Axios from "axios"
export default function EditAnnouncement(){
    const location = useLocation();
    const {id} = useParams()
    const action = `/head/announcement/edit/${id}`
    //Use state from previous page
    const data = location.state
    console.log(id)
    return (
        <div className="container mt-5">
          <h2>Edit Event</h2>
          <Form method='patch' action={action} >
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">
                Event Name
              </label>
              <input
                type="text"
                className="form-control"
                id="eventName"
                name="eventName"
                defaultValue={data.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-control"
                id="category"
                name="category"
              >
                <option value={data.category}>{data.category}</option>
                <option value="Event">Event</option>
                <option value="Semianr">Seminar</option>
                <option value="Job Offers">Job Offers</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name = "description"
                defaultValue={data.description}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="eventDate" className="form-label">
                Event Date
              </label>
              <input
                type="date"
                className="form-control"
                id="eventDate"
                name = "eventDate"
                defaultValue={data.event_date}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">
                Start Time
              </label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                name="startTime"
                defaultValue={data.time_start}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label">
                End Time
              </label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                name="endTime"
                defaultValue={data.time_end}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="venue" className="form-label">
                Venue
              </label>
              <input
                type="text"
                className="form-control"
                id="venue"
                name = "venue"
                defaultValue={data.venue}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="host" className="form-label">
                Host
              </label>
              <input
                type="text"
                className="form-control"
                id="host"
                name="host"
                defaultValue={data.host}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="view" className="form-label">
                Viewability
              </label>
              <select
                className="form-control"
                id="view"
                name="view"
              >
                <option value="">Select Viewability</option>
                <option value="Public">Public</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
            
            <button className='btn btn-primary'>Submit</button>
    </Form>
    </div>)
}

export const EditAnnouncementAction = async({params, request})=>{
    try {
      const {id} = params  
      const data = await request.formData();
      const name = data.get('eventName')
      const category = data.get('category')
      const description = data.get('description')
      const event_date = data.get('eventDate')
      const time_start = data.get('startTime')
      const time_end = data.get('endTime')
      const venue = data.get('venue')
      const host = data.get('host')
      const viewable = data.get('view')

      await Axios.patch(`https://alumni-track-system-kr9h.onrender.com/api/v1/head/event/${id}`,{
        name,
        category,
        description,
        event_date,
        time_start,
        time_end,
        venue,
        host,
        viewable
      })
  
      return redirect('/head/announcement/view')
    } catch (error) {
      console.log(error.response)
    }
  }
  