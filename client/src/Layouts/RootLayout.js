import { NavLink, Outlet } from "react-router-dom"
import img from "./assets/aau-logo.png"
export default function RootLayout(){
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
            <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/alumni" className="nav-link">Alumni</NavLink>
            </li>
            <li className="nav-item"> 
            <NavLink to="/announcement" className="nav-link">Announcement</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
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


