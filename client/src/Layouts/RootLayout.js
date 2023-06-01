import { NavLink, Outlet } from "react-router-dom"
import img from "./assets/aau-logo.png"
export default function RootLayout(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <img src={img} alt="Start Image" className="navbar-brand" style={{ width: '90px', height: '90px', marginRight:'100px' }} />
        <h2 className="text-light text-center d-flex flex-row justify-content-center">Alumni Tracking System</h2>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mt-5 d-flex flex-row justify-content-end">
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


