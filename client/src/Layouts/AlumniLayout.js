import { NavLink, Outlet } from "react-router-dom"
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
              <NavDropdown.Item href="/alumnus/profile" className="dropdown-item">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/alumnus/profile/update" className="dropdown-item"> Update Profile </NavDropdown.Item>
              <NavDropdown.Item
                href="/alumnus/profile/password"
                className="dropdown-item"
              >
                Change Password
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/alumnus/announcement" className="item">
              Announcement
            </Nav.Link>
            <NavDropdown
              title="Discussion Forum"
              id="discussion-forum-dropdown"
              className="item"
            >
              <NavDropdown.Item
                href="/alumnus/forum"
                className="dropdown-item"
              >
                Forum
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/alumnus/forum/me"
                className="dropdown-item"
              >
                My Posts
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/alumnus/forum/create"
                className="dropdown-item"
              >
                Create
              </NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link href="/alumnus/logout"  className="item">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  );
}
const imgStyle = {
  height: "30px",
  width: "30px",
};
// export default function AlumniLayout(){
//     return(
      
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <img src={img} alt="Start Image" className="navbar-brand me-5" style={{ width: '90px', height: '90px', marginRight:'100px' }} />
//         <h3 className="text-light text-center me-5">Alumni Tracking System</h3>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//           <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Profile
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><NavLink to="/alumnus/profile" className="dropdown-item">Profile</NavLink></li>
//             <li><NavLink to="/alumnus/profile/update" className="dropdown-item">Update Profile</NavLink></li>
//             <li> <NavLink to="/alumnus/profile/password" className="dropdown-item">Change Password</NavLink></li>
//           </ul>
//         </li>
//             <li className="nav-item">
//             <NavLink to="/alumnus/announcement" className="nav-link">Announcement</NavLink>
//             </li>
//             <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Discussion Forum
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><NavLink to="/alumnus/forum" className="dropdown-item">Forum</NavLink></li>
//             <li><NavLink to="/alumnus/forum/me" className="dropdown-item">My Posts</NavLink></li>
//             <li> <NavLink to="/alumnus/forum/create" className="dropdown-item">Create</NavLink></li>
//           </ul>
//         </li>
//             <li className="nav-item">
//             <NavLink to="/alumnus/logout" className="nav-link">Logout</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav> 

//             <main>
//                 <Outlet/>
//             </main>
         
//         </div>
//     )
// }