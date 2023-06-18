import { NavLink, Outlet } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "./assets/aau-logo.png";
import sislogo from "./assets/school logo.jpg";
import "../css/navbar.css";
export default function HeadLayout(){
    return (
      <>
        <div class="header">
          <div class="brand">
            <img src={img} class="aau-logo" />
            <h2>Alumni Tracking System - School of Information Science</h2>
            <img src={sislogo} class="sis-logo" />
          </div>
          <Navbar class="navbar">
            <Nav id="navbar-nav">
              <NavDropdown title="Profile" className="item">
                <NavDropdown.Item className="dropdown-item">
                    <NavLink to="/head/profile" className="route" id="profile">
                      Profile
                    </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item">
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Announcements" className="item">
                <NavDropdown.Item>
                  <NavLink to="/head/announcement" className="route">
                    Create Announcements
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item">
                  <NavLink to="/head/announcement/view" className="route">
                    View Announcements
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="alumnus">
                <NavLink to="/head/alumnus" className="item route">
                  Alumnus
                </NavLink>
              </Nav.Link>
              <Nav.Link id="report">
                <NavLink to="/head/report" className="item route">
                  Report
                </NavLink>
              </Nav.Link>
              <Nav.Link id="Logout">
                <NavLink to="/alumnus/logout" className="item route">
                  Logout
                </NavLink>
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
