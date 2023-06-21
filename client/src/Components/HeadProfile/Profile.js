import React, { useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import '../components.css'
function HeadProfilePage() {
  const data = useLoaderData();
  return (
    <section className='container mt-5'>
     <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="nav rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem className='bc_item white' active>Head Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
      <MDBContainer style={{marginTop:'10px'}}>
        <MDBRow>
          <MDBCol >
            <MDBCard >
              <MDBCardBody>
                <MDBRow>
                  <MDBCol >
                    <h5 className="mb-0">Full Name</h5>
                  </MDBCol>
                  <MDBCol sm="9">
                    <p className="text-muted mb-0">{data.first_name} {data.last_name} {data.grandfather_name}</p>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="mb-4">
                  <MDBCol sm="3">
                    <h5 className="mb-0">Email</h5>
                  </MDBCol>
                  <MDBCol sm="9">
                    <p className="text-muted mb-0">{data.email}</p>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="mb-4">
                  <MDBCol sm="3">
                    <h5 className="mb-0">Phone</h5>
                  </MDBCol>
                  <MDBCol sm="9">
                    <p className="text-muted mb-0">{data.phone_number}</p>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="mb-4">
                  <MDBCol sm="3">
                    <h5 className="mb-0">Department</h5>
                  </MDBCol>
                  <MDBCol sm="9">
                    <p className="text-muted mb-0">{data.department}</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export const HeadProfileLoader = async()=>{
  try {
    const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/head')
    const resData = res.data.data.head
    return resData
  } catch (error) {
    console.log(error.response)
  }
}
const myStyle = {
  margin: "80px 380px",
};
export default HeadProfilePage