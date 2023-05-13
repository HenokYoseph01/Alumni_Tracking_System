import { NavLink, Outlet } from "react-router-dom"
export default function AdminLayout(){
    return(
        <div>
            <header>
                <nav style={{display:'flex', justifyContent:'space-between'}}>
                    <NavLink to="/admin/profile" style={{marginRight:10}}>Profile</NavLink>
                    <ul>
                    <NavLink to="/admin/create" style={{marginRight:10}}>Account Creation</NavLink>
                        <li><NavLink to="/admin/create/alumni">Alumni Creation</NavLink></li>
                        <li><NavLink to="/admin/create/alumniManual">Indvidual Alumni Creation</NavLink></li>
                        <li><NavLink to="/admin/create/head">Head Creation</NavLink></li>
                        <li><NavLink to="/admin/create/admin">Admin Creation</NavLink></li>
                    </ul>
                    <NavLink to="/admin/moderate" style={{marginRight:10}}>Moderation</NavLink>
                    <NavLink to="/alumnus/logout" style={{marginRight:10}}>Logout</NavLink>
                </nav>
                
            </header>

            <main>
                <Outlet/>
            </main>
         
        </div>
    )
}