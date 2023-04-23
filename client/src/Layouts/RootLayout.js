import { NavLink, Outlet } from "react-router-dom"
export default function RootLayout(){
    return(
        <div>
            <header>
                <nav>
                    <NavLink to="/alumni" style={{marginRight:10}}>Alumni</NavLink>
                    <NavLink to="/accnouncemnt" style={{marginRight:10}}>Annocuncement</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
                
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}