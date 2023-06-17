import { Outlet, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "./assets/aau-logo.png";
import sislogo from "./assets/school logo.jpg";
import "../css/navbar.css";

export default function AdminLayout(){
    return(
      <>
      <div class="header">
        <div class="brand">
          <img src={img} class="aau-logo" />
          <h2>Alumni Tracking System - School of Information Science</h2>
          <img src={sislogo} class="sis-logo" />
        </div>
        <Navbar class="navbar">
          <Nav id="navbar-nav">
            <NavDropdown title="Profile" id="profile-dropdown" className="item">
              <NavDropdown.Item href="/admin/profile" className="dropdown-item">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/admin/changePassword"
                className="dropdown-item"
              >
                Change Password
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Account Creation"
              id="account-creation-dropdown"
              className="item"
            >
              <NavDropdown.Item
                href="/admin/create/alumni"
                className="dropdown-item"
              >
                Upload Alumni List
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/admin/create/alumniManual"
                className="dropdown-item"
              >
                Individual Alumni Creation
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/admin/create/head"
                className="dropdown-item"
              >
                Head Creation
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/admin/create/admin"
                className="dropdown-item"
              >
                Admin Creation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="moderation" className="item">
              <NavLink to="/admin/moderate" className="route">Moderation</NavLink>
            </Nav.Link>
            <Nav.Link className="item">
              <NavLink to="/alumnus/logout" className="route">Logout</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
const imgStyle = {
  height: "30px",
  width: "30px",
};