import landing from "../../Layouts/assets/landing.jpg"
import classes from "./HeroStyles.modules.css";
export default function Hero(){
    return(
     <div className={classes.hero}>
        <div className="hero-text">
            <h1> WELCOME TO <br/>THE ALUMNI FAMILY</h1>
          <div className="second">
            <span className="p1">Addis Ababa University</span>
            <span className="vertical"></span>
            <span className="p2">School Of Information Science</span>
         </div>    
         </div>
         <img className={classes.img} src={landing}/> 
    <div><h1>About Our Page</h1></div> 
     <div className="content"><p>We are excited to help you stay connected with your alma mater and fellow alumni.

Our platform allows you to easily update your contact information, share your professional accomplishments, and connect with other alumni in your field. By joining our community, you will have access to exclusive events, job opportunities, and networking opportunities.

We understand the importance of staying connected with your university and the impact it can have on your career. Our goal is to provide a seamless experience for all alumni, whether you graduated last year or decades ago.

With our user-friendly interface, you can easily search for other alumni by graduation year, major, or location. You can also join groups based on shared interests or industries. This makes it easy to find like-minded individuals who can offer advice and support as you navigate your career.

We also offer a job board where employers specifically seek out our alumni for job openings. This is a great way to stay connected with the university community and potentially land your dream job.

Join us today and start reconnecting with old classmates and making new connections within the alumni community. We look forward to helping you achieve success in all aspects of your life!</p></div>
     </div>
   
    )
}