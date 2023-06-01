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
import HeadLayout from './Layouts/HeadLayout';
import HeadProfilePage, { HeadProfileLoader } from './Components/HeadProfile/Profile';
import ReportGenerator, { ReportGeneratorAction } from './Components/HeadProfile/Report';
import PostForum, { PostForumAction } from './Components/AlumniProfile/PostForum';
import HeadAlumniSearch, { HeadAlumniSearchLoader } from './Components/HeadProfile/AlumniSearch';
import CreateEvent, { CreateEventAction } from './Components/HeadProfile/CreateEvent';
import ViewAnnouncement, { viewAnnouncementLoader } from './Components/HeadProfile/ViewAnnouncement';
import AdminLayout from './Layouts/AdminLayout';
import AdminProfile, { AdminProfileLoder } from './Components/AdminProfile/AdminProfile';
import AlumniAccountCreationPage from './Components/AdminProfile/CreateAlumni';
import HeadOfSchoolForm from './Components/AdminProfile/CreateHead';
import AlumniAccountCreation from './Components/AdminProfile/CreateIndividualAlumni';
import AdminAccountCreation from './Components/AdminProfile/CreateAdmin';
import Moderation, { ModerationLoader } from './Components/AdminProfile/Moderation';
import ViewPost, { ViewPostLoader } from './Components/AdminProfile/ViewPost';
import ForumBan from './Components/AlumniProfile/ForumBan';
import EditForum, { EditForumAction } from './Components/AlumniProfile/EditPost';
import ViewPublicAnnouncement, { viewPublicAnnouncementLoader } from './Components/PublicView/PublicAnnouncement';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<FooterLayout/>}>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/alumni" element={<Alumni/>} action={alumniActon}/>
      <Route path="/announcement" element={<ViewPublicAnnouncement/>} loader={viewPublicAnnouncementLoader}/>
    </Route>
    <Route path = 'alumnus' element={<AlumniLayout/>}>
        <Route path = 'profile' element={<AlumniProfile/>} loader={AlumniProfileLoder}/>
        <Route path = 'announcement' element = {<Announcement/>} loader={announcementLoader}/>
        <Route path = 'forum' element = {<Forum/>} loader={forumLoader} errorElement={<ForumBan/>}/>
        <Route path = 'forum/me' element = {<AuthorForum/>} loader={authorForumLoader}/>
        <Route path = 'forum/me/edit' element = {<EditForum/>}/>
        <Route path = 'forum/create' element = {<PostForum/>} action={PostForumAction}/>
        <Route path = 'forum/author/:id' element = {<MinimalView/>} loader={MinimalViewLoader}/>
        <Route path = 'forum/:id' element = {<Replies/>} loader={RepliesLoader} />
        <Route path = 'replies/:id' element={<PostReply/>} action={PostReplyAction}/>
        <Route path = 'logout' element={<Logout/>}/>        
    </Route>
    <Route path = 'register' element={<Registeration/>} loader={registrationLoader} />
    <Route path = 'register/questions' element={<Questionnaire/>}/>
    {/* Head Layout */}
    <Route path='head' element={<HeadLayout/>}>
      <Route path = 'profile' element={<HeadProfilePage/>} loader={HeadProfileLoader}/>
      <Route path = 'report' element={<ReportGenerator/>} action={ReportGeneratorAction}/>
      <Route path = 'alumnus' element={<HeadAlumniSearch/>} loader={HeadAlumniSearchLoader}/>
      <Route path = 'announcement' element={<CreateEvent/>} action={CreateEventAction}/>
      <Route path = 'announcement/view' element={<ViewAnnouncement/>} loader={viewAnnouncementLoader}/>
    </Route>
    {/* Head Layout */}
    
    {/* Admin Layout */}
    <Route path='admin' element={<AdminLayout/>}>
      <Route path = 'profile' element={<AdminProfile/>} loader={AdminProfileLoder}/>
      <Route path = 'create/alumni' element={<AlumniAccountCreationPage/>}/>
      <Route path = 'create/alumniManual' element={<AlumniAccountCreation/>}/>
      <Route path = 'create/head' element={<HeadOfSchoolForm/>}/>
      <Route path = 'create/admin' element={<AdminAccountCreation/>}/>
      <Route path = 'moderate' element={<Moderation/>} loader={ModerationLoader}/>
      <Route path = 'moderate/post/:id' element={<ViewPost/>} loader={ViewPostLoader}/>
    </Route>
    </Route>
    
    

  )
)


function App(){
  
  return(
    <RouterProvider router={router}/>
  )
}

export default App