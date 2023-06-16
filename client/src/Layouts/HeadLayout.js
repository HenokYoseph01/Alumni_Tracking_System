import { NavLink, Outlet } from "react-router-dom"
import img from "./assets/aau-logo.png"

export default function HeadLayout(){
    return(
        <div>
            {/* <header>
                <nav style={{display:'flex', justifyContent:'space-between'}}>
                    <NavLink to="/head/profile" style={{marginRight:10}}>Profile</NavLink>
                    <NavLink to="/head/announcement" style={{marginRight:10}}>Announcement</NavLink>
                    <NavLink to="/head/alumnus" style={{marginRight:10}}>Alumnus</NavLink>
                    <NavLink to="/head/report" style={{marginRight:10}}>Report</NavLink>
                    <NavLink to="/alumnus/logout" style={{marginRight:10}}>Logout</NavLink>
                </nav>
                
            </header> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <img src={img} alt="Start Image" className="navbar-brand me-5" style={{ width: '90px', height: '90px', marginRight:'100px' }} />
        <h3 className="text-light text-center me-5">Alumni Tracking System</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/head/profile" className="nav-link">Profile</NavLink>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Annocuncements
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink to="/head/announcement" className="dropdown-item">Create Annocuncements</NavLink></li>
            <li><NavLink to="/head/announcement/view" className="dropdown-item">View Annocuncements</NavLink></li>
          </ul>
        </li>
            <li className="nav-item"> 
            <NavLink to="/head/alumnus" className="nav-link">Alumnus</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/head/report" className="nav-link">Report</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/alumnus/logout" className="nav-link">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> 

            <main>
                <Outlet/>
            </main>
         
        </div>
    )
}