import React from "react";
import { useLocation } from "react-router-dom";

export default function Questionnaire() {
    const location = useLocation();
    console.log(location.state)
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <h2>Registration Form</h2>
          <hr />
          <form>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="question1">Would you categorize your occupation as your graduating department based?(Networking, Web Dev, AI, etc.)</label>
                <select type="text" className="form-control" id="question1" >
                <option selected>Choose</option>
                <option value="tech">Yes</option>
                <option value="non-tech">No</option>
                </select>
              </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="salary">Salary</label>
                <input type="number" className="form-control" id="salary" />
              </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="satisifaction">How satisfied are you with your current job(rate out of 5)?</label>
                <input type="number" className="form-control" id="satisfaction" min={1} max={5} />
              </div>
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="attain">Would you say the university helped you attain your current job?</label>
                <select className="form-control" id="attain" >
                    <option selected>Choose</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              
              <button className="btn btn-sm btn-primary">Submit</button>
            </div>
            </div>
            </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
}
              
