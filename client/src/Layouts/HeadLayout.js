import { NavLink, Outlet } from "react-router-dom"
export default function HeadLayout(){
    return(
        <div>
            <header>
                <nav style={{display:'flex', justifyContent:'space-between'}}>
                    <NavLink to="/head/profile" style={{marginRight:10}}>Profile</NavLink>
                    <NavLink to="/head/announcement" style={{marginRight:10}}>Announcement</NavLink>
                    <NavLink to="/head/alumnus" style={{marginRight:10}}>Alumnus</NavLink>
                    <NavLink to="/head/report" style={{marginRight:10}}>Report</NavLink>
                    <NavLink to="/alumnus/logout" style={{marginRight:10}}>Logout</NavLink>
                </nav>
                
            </header>

            <main>
                <Outlet/>
            </main>
         
        </div>
    )
}