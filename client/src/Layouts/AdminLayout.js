import {Outlet} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from "./assets/aau-logo.png"
import profileLogo from "./assets/logo.svg"
import sislogo from "./assets/school logo.jpg"
import '../css/navbar.css'
export default function AdminLayout(){
    return (
      // <div>
      <>
        <div class="header">
          <div class="brand">
            <img src={img} class="aau-logo" />
            <h2>Alumni Tracking System - School of Information Science</h2>
            <img src={sislogo} class="sis-logo" />
          </div>
          <Navbar class="navbar">
            <Nav className="navbar-nav">
              <Nav.Link href="/admin/profile" className="item">
                Profile
              </Nav.Link>
              <NavDropdown title="Account Creation" id="account-creation-dropdown">
              <NavDropdown.Item href="/admin/create/alumni" className="dropdown-item">Upload Alumni List</NavDropdown.Item>
              <NavDropdown.Item href="/admin/create/alumniManual" className="dropdown-item">
              Individual Alumni Creation
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/create/head" className="dropdown-item">
              Head Creation
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/create/admin" className="dropdown-item">
              Admin Creation
              </NavDropdown.Item>
             
            </NavDropdown>
              <Nav.Link href="/admin/moderate" className="item">
                Moderation
              </Nav.Link>
              <Nav.Link href="/alumnus/logout" className="item">
                Logout
              </Nav.Link>

            </Nav>
          </Navbar>
          <main>
            <Outlet />
          </main>
        </div>
      </>
     
      //                     <DropDownItem img={{src:'/logo.svg'}} text = {"My profile"}>NSACCV</DropDownItem>
    
    );
}
const imgStyle = {
    height:'30px',
    width:'30px'
};

function DropDownItem(props){
    return(
        <li className="dropdownitem">
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    );

}