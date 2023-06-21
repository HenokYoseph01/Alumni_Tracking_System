
import React, { useState } from 'react';
import Axios from 'axios'
import { Form, NavLink, redirect, useActionData } from 'react-router-dom';
import '../components.css'
export default function CreateEvent() {
  const data = useActionData();


  return (
    <div>
      <h1 className='text-center mt-3 me-lg-5'>Create Announcement</h1>
      <Form method='post' action='/head/announcement'>
      <div className='container row justify-content-center mt-3'>
      <div className="col-lg-4 col-md-6">
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            required
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-control"
            id="category"
            name="category"
          >
            <option value="">Select Category</option>
            <option value="Event">Event</option>
            <option value="Semianr">Seminar</option>
            <option value="Job Offers">Job Offers</option>
          </select>
        </div>

      </div>

      <div className='container row justify-content-center mt-3'>
        <div className="col-lg-8  col-md-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name = "description"
            required
          ></textarea>
        </div>
      </div>

      <div className='container row justify-content-center mt-3'>
      <div className="col-lg-4 col-md-6">
          <label htmlFor="eventDate" className="form-label">
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            name = "eventDate"
            required
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <label htmlFor="startTime" className="form-label">
            Start Time
          </label>
          <input
            type="time"
            className="form-control"
            id="startTime"
            name="startTime"
            required
          />
        </div>
      </div>  

      <div className='container row justify-content-center mt-3'>
       <div className="col-lg-4 col-md-6">
          <label htmlFor="endTime" className="form-label">
            End Time
          </label>
          <input
            type="time"
            className="form-control"
            id="endTime"
            name="endTime"
            required
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <label htmlFor="venue" className="form-label">
            Venue
          </label>
          <input
            type="text"
            className="form-control"
            id="venue"
            name = "venue"
            required
          />
        </div>

      </div>

      <div className='container row justify-content-center mt-3'>
      <div className="col-lg-4 col-md-6">
          <label htmlFor="host" className="form-label">
            Host
          </label>
          <input
            type="text"
            className="form-control"
            id="host"
            name="host"
            required
          />
        </div>
        <div className="col-lg-4 col-md-6">
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

      </div>
    <div className='container row justify-content-center mt-5'>
      <button className='button col-4'>Submit</button>
    </div>
    
</Form>
</div>)
}
const myStyle = {
  margin: "40px 380px",
};
export const CreateEventAction = async({request})=>{
  try {
    console.log("WORKING")
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
    console.log("WORKING")
   await Axios.post('https://alumni-track-system-kr9h.onrender.com/api/v1/head/event',{
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
    console.log("WORKING")
    return redirect('/head/announcement/view')
  } catch (error) {
    console.log(error.response)
  }
}
