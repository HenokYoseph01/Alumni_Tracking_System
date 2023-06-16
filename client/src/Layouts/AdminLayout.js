import { NavLink, Outlet } from "react-router-dom"
import img from "./assets/aau-logo.png"

export default function AdminLayout(){
    return(
        <div>
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
            <NavLink to="/admin/profile" className="nav-link">Profile</NavLink>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Creation
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to="/admin/create/alumni" className="dropdown-item">Alumni Creation</NavLink></li>
                <li><NavLink to="/admin/create/alumniManual" className="dropdown-item">Indvidual Alumni Creation</NavLink></li>
                <li><NavLink to="/admin/create/head" className="dropdown-item">Head Creation</NavLink></li>
                <li><NavLink to="/admin/create/admin" className="dropdown-item">Admin Creation</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
            <NavLink to="/admin/moderate" className="nav-link">Moderation</NavLink>
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