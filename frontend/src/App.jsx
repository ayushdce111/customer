import { useState } from 'react'
import Banner from './components/Banner.jsx';
import Header from './components/Header.jsx';
import Topheader from './components/Topheader.jsx';
import './App.css';
import Sidebar from "./components/Sidebar.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    
    const[showSidebar,setShowSidebar]= useState(false);
    const[showLoginSignup,setLoginSignup]= useState(false);

    const HeaderProps = [ setShowSidebar,setLoginSignup ];
    const SidebarProps = [ setShowSidebar,showSidebar ];
    const LoginSignupProps = [ setLoginSignup ];

  return (
    <>
    <Topheader/>
    <Header HeaderProps={HeaderProps}/>
    <Banner />
    {showSidebar && <Sidebar SidebarProps={SidebarProps}/> }
    {showLoginSignup && <LoginSignup LoginSignupProps={LoginSignupProps}/> }
      <ToastContainer />
    </>
  )
}

export default App
