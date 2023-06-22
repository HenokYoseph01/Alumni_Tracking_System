import {Outlet, NavLink} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import img from "./assets/aau-logo.png"
import sislogo from "./assets/school logo.jpg"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
      <Navbar  key='md' expand='md'>
        
        <div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className = 'border border-dark mb-5'/>
        </div>
        
      
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-md`}
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="end"

      >
      <Offcanvas.Body>
      <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="/" className="item">Home</Nav.Link>
            <Nav.Link className="item">
              <NavLink to="/alumni" className="route">Alumni</NavLink>
            </Nav.Link>
            <Nav.Link href="/announcement" className="item">
              <NavLink to="/announcement" className="route">Announcement</NavLink>
            </Nav.Link>
            <Nav.Link href="/login" className="item">Login</Nav.Link>
          </Nav> 

      </Offcanvas.Body>
      </Navbar.Offcanvas>
          
      </Navbar>
      <main>
        <Outlet/>
      </main>
      </div>
      </>          
    )
}


{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
  <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
 
      <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
        className = 'border border-dark'
                    />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
 
  </Navbar>
))}