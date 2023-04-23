import {useEffect,useState} from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, 
  RouterProvider} from 'react-router-dom'
import Login, { loginAction } from './Components/Login/Login';
import Landing from './Components/Landing/Landing';
import RootLayout from './Layouts/RootLayout';
import Alumni, { alumniActon } from './Components/PublicView/Alumni';
import AlumniProfile, { AlumniProfileLoder } from './Components/AlumniProfile/AlumniProfile'
import AlumniLayout from './Layouts/AlumniLayout';
import Forum, { forumLoader } from './Components/AlumniProfile/Forum';
import Replies, { RepliesLoader } from './Components/AlumniProfile/Replies';
import MinimalView, { MinimalViewLoader } from './Components/AlumniProfile/MinimalView';
import FooterLayout from './Layouts/FooterLayout'
import PostReply, { PostReplyAction } from './Components/AlumniProfile/PostReply';
import ForumLayout from './Layouts/ForumLayout';
import AuthorForum, { authorForumLoader } from './Components/AlumniProfile/AuthorForum';
import Announcement, { announcementLoader } from './Components/AlumniProfile/Announcement';
import Logout from './Components/AlumniProfile/Logout';
import Registeration, { registrationAction, registrationLoader } from './Components/AlumniProfile/Registeration';
import Questionnaire from './Components/AlumniProfile/Questionnaire';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<FooterLayout/>}>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Landing/>}/>
      <Route path="/login" element={<Login/>} action={loginAction}/>
      <Route path="/alumni" element={<Alumni/>} action={alumniActon}/>
    </Route>
    <Route path = 'alumnus' element={<AlumniLayout/>}>
        <Route path = 'profile' element={<AlumniProfile/>} loader={AlumniProfileLoder}/>
        <Route path = 'announcement' element = {<Announcement/>} loader={announcementLoader}/>
        <Route path = 'forum' element = {<Forum/>} loader={forumLoader}/>
        <Route path = 'forum/me' element = {<AuthorForum/>} loader={authorForumLoader}/>
        <Route path = 'forum/author/:id' element = {<MinimalView/>} loader={MinimalViewLoader}/>
        <Route path = 'forum/:id' element = {<Replies/>} loader={RepliesLoader} />
        <Route path = 'replies/:id' element={<PostReply/>} action={PostReplyAction}/>
        <Route path = 'logout' element={<Logout/>}/>        
    </Route>
    <Route path = 'register' element={<Registeration/>} loader={registrationLoader} />
    <Route path = 'register/questions' element={<Questionnaire/>}/>
    </Route>
    
    

  )
)


function App(){
  const[email, setUsername] = useState("");
  const[password, setPassword] = useState("");
  //const [backendData, setBackendData] = useState({});

  // const loginUser = async()=>{
  //   try{
  //     const x = await Axios.post('http://localhost:5000/api/v1/login',{
  //     email,
  //     password
  //   })
  //     Axios.defaults.headers.common = {'Authorization': `Bearer ${x.data.userToken}`}
  //     console.log(x)
  //   console.log('SUCCESSFULLY LOGGED IN')
  //   }catch(error){
  //     (console.log('OOPS'))
  //   }
    
  // }

  // const showAlumni = async()=>{
  //   try {
  //     const alumni = await Axios.get('http://localhost:5000/api/v1/alumni')
  //     setBackendData(alumni.data.data.alumni)
  //   } catch (error) {
  //     console.log('OOPS')
  //   }
  // }

  return(
    <RouterProvider router={router}/>
  )
}

export default App