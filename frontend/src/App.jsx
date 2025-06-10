import { useEffect, useState } from 'react'
import Homepage from './components/homepage/Homepage.jsx';
import UserProfile from "./components/UserProfile.jsx";
import Header from './components/Header.jsx';
import Topheader from './components/Topheader.jsx';
import './App.css';
import Sidebar from "./components/Sidebar.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
    
    const[showSidebar,setShowSidebar]= useState(false);
    const[showLoginSignup,setLoginSignup]= useState(false);

    const HeaderProps = [ setShowSidebar,setLoginSignup ];
    const SidebarProps = [ setShowSidebar,showSidebar ];
    const LoginSignupProps = [ setLoginSignup ];

    const [isLoggedIn,setisLoggedIn]=useState(false);
        const [userData,setuserData]=useState("");

useEffect(()=>{

  const isLoggedInVar = localStorage.getItem('isLoggedIn');
  
  if(isLoggedInVar==="true"){
        setisLoggedIn(true);
    }

    const userData = localStorage.getItem('user');
  setuserData(userData);
},[])
useEffect(()=>{
  console.log(isLoggedIn,"<-------------isLoggedIn---",userData)
},[isLoggedIn])
  return (
  
    <BrowserRouter>
    <Topheader/>
    <Header HeaderProps={HeaderProps}/>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      
        <Route
          path="/UserProfile"
          element={
            isLoggedIn===true ? (
              <UserProfile userData={userData} />
            ) : (
              <Navigate to="/" />
              
            )
          }
        />
              {console.log(isLoggedIn,"<-----------isLoggedIn BOTTOM")}
      </Routes>

    
    {showSidebar && <Sidebar SidebarProps={SidebarProps}/> }
    {showLoginSignup && <LoginSignup LoginSignupProps={LoginSignupProps}/> }
      <ToastContainer />

      </BrowserRouter>
  
  )
}

export default App
