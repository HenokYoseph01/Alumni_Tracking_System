import { NavLink, Outlet } from "react-router-dom"
export default function ForumLayout(){
    return(
        <div>
                {/* <nav>
                    <NavLink to="/alumnus/profile" style={{marginRight:10}}>My Posts</NavLink>
                   
                </nav> */}
                
                <h2>Work</h2>
            

            <main>
                <Outlet/>
            </main>
         
        </div>
    )
}