import { NavLink, Outlet } from "react-router-dom"
export default function AlumniLayout(){
    return(
        <div>
            <header>
                <nav style={{display:'flex', justifyContent:'space-between'}}>
                    <NavLink to="/alumnus/profile" style={{marginRight:10}}>Profile</NavLink>
                    <NavLink to="/alumnus/announcement" style={{marginRight:10}}>Announcement</NavLink>
                    <NavLink to="/alumnus/forum" style={{marginRight:10}}>Forum</NavLink>
                    <NavLink to="/alumnus/logout" style={{marginRight:10}}>Logout</NavLink>
                </nav>
                
            </header>

            <main>
                <Outlet/>
            </main>
         
        </div>
    )
}