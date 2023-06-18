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
import { useLoaderData, useParams } from 'react-router-dom';

function MinimalView() {
    const {id} = useParams()
    const data = useLoaderData();
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
       
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={data.photo_url}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{data.occupation}</p>
                <p className="text-muted mb-4">{data.place_of_work}</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#333333' }} />
                    <a href={data.linkedin} target="_blank" style={{textDecoration:"none",color:'black'}}>LinkedIn</a>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.first_name} {data.last_name} {data.grandfather_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Graduation</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.date_of_graduation}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>

           </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}


export const MinimalViewLoader = async({params})=>{
  try {
    const {id} = params;
    const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/alumni/forum/alumni/${id}`)
    const resData = res.data.data.alumni
    return resData
  } catch (error) {
    console.log(error.response)
  }
}

export default MinimalView