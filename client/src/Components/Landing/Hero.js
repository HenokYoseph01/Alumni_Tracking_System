import landing from "../../Layouts/assets/landing.jpg"
import classes from "./HeroStyles.modules.css";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function Hero(){
    return(
     <div className={classes.hero}>
        <div className="hero-text">
            <h1> WELCOME TO <br/>THE ALUMNI FAMILY</h1>
          <div className="second">
            <span className="p1">Addis Ababa University</span>
            <span className="vertical"></span>
            <span className="p2">School Of Information Science</span>
         </div>    
         </div>
         <img className={classes.img} src={landing}/> 
    <div></div> 
     <div className="content">
      <div className="card">
     <MDBCard alignment="center">
      <MDBRow>
        <MDBCol sm='1'>

        </MDBCol>
        <MDBCol sm='7'>
        <MDBCardBody>
        <MDBCardTitle><h1>About Our Page</h1></MDBCardTitle>
        <MDBCardText >
        Welcome to our alumni tracking website! We are excited to help you stay connected with your alma mater and fellow alumni.

Our platform allows you to easily update your contact information, share your professional accomplishments, and connect with other alumni in your field.

We understand the importance of staying connected with your university and the impact it can have on your career. Our goal is to provide a seamless experience for all alumni, whether you graduated last year or decades ago.

With our user-friendly interface, you can easily search for other alumni by graduation year, major, or location. You can also join groups based on shared interests or industries. This makes it easy to find like-minded individuals who can offer advice and support as you navigate your career.
Join us today and start reconnecting with old classmates and making new connections within the alumni community. We look forward to helping you achieve success in all aspects of your life!
        </MDBCardText>   
      </MDBCardBody>

        </MDBCol>
      <MDBCol sm='3'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> 
  </MDBCol>
  <MDBCol sm='1'>
  </MDBCol>
   </MDBRow>
   </MDBCard>
    </div>
     </div>
     </div>
   
    )
}