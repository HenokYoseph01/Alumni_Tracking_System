import React, { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import Axios  from "axios";

export default function ReportGenerator() {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [isReportGenerated, setIsReportGenerated] = useState(false);

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handleReportGeneration = async(event) => {
    try {      
      event.preventDefault()
      const batch = selectedBatch;
      await Axios.post(`https://alumni-track-system-kr9h.onrender.com/api/v1/head/generatereport`,{
          batch
      },{
        responseType:'blob'
      })
      setIsReportGenerated(true)
  } catch (error) {
      console.log(error.response)
  }
    
  };

  //const data = useActionData();

  //if(data && data.alert) setIsReportGenerated(true);

  return (
    <div className="container my-3">
      {isReportGenerated && (
        <div className="alert alert-success my-3" role="alert">
          Report generated successfully!
        </div>
      )}
      <h3>Report Generator</h3>
      <form>
        <div className="form-group">
          <label htmlFor="batchSelect">Select Batch:</label>
          <select
            className="form-control"
            id="batchSelect"
            name = "Year"
            onChange={handleBatchChange}
          >
            <option value="">Select Batch</option>
            <option value="all">All Batches</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleReportGeneration}>
          Generate Report
        </button>
      </form>

      
    </div>
  );
};

export const ReportGeneratorAction = async({request})=>{
    try {
        const data = await request.formData();
        
        const batch = data.get('Year');
        await Axios.post(`https://alumni-track-system-kr9h.onrender.com/api/v1/head/generatereport`,{
            batch
        })
        return {alert:true}
    } catch (error) {
        console.log(error.response)
    }
}



