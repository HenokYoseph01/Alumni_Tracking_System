import {Outlet, NavLink} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import img from "./assets/aau-logo.png"
import sislogo from "./assets/school logo.jpg"
import '../css/navbar.css'
export default function RootLayout(){
    return(
      <>
      <div class="header">
      <div class="brand">
        <img src={img} class="aau-logo"/>
        <h2>Alumni Tracking System - School of Information Science</h2>
        <img src={sislogo} class="sis-logo"/>
      </div>
      <Navbar class="navbar">
          <Nav className="navbar-nav">
            <Nav.Link href="/" className="item">Home</Nav.Link>
            <Nav.Link className="item">
              <NavLink to="/alumni" className="route">Alumni</NavLink>
            </Nav.Link>
            <Nav.Link href="/announcement" className="item">
              <NavLink to="/announcement" className="route">Announcement</NavLink>
            </Nav.Link>
            <Nav.Link href="/login" className="item">Login</Nav.Link>
          </Nav> 
      </Navbar>
      <main>
        <Outlet/>
      </main>
      </div>
      </>          
    )
}


