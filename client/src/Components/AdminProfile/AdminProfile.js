import React from 'react';
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

function AdminProfile() {
  const data = useLoaderData();
  return (
    <section className = "container">
     
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="nav rounded-3 p-3 mb-4 mt-5">
              <MDBBreadcrumbItem className='bc_item white' active>Admin Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol >
            
              <MDBCardBody className='cardy'>
                <MDBRow className='de'>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.first_name} {data.last_name} {data.grandfather_name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='de'>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className='de'>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.phone_number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
           

           </MDBCol>
        </MDBRow>
      
    </section>
  );
}

export const AdminProfileLoder = async()=>{
  try {
    const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/admin')
    const resData = res.data.data.admin
    return resData
  } catch (error) {
    console.log(error.response)
  }
}

export default AdminProfile