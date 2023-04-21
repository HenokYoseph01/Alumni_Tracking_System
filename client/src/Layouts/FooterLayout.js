import { Outlet } from "react-router-dom"
import classes from './FooterLayout.module.css'
export default function AlumniLayout(){
    return(
        <div>
            
            <main>
                <Outlet/>
            </main>

            <div className={classes.footer_container}>
                <span className={classes.footer_text}>© 2023 Alumni Tracking System</span>
            </div>
            
        </div>
    )
}

