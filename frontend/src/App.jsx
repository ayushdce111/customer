import { useState } from 'react'
import Banner from './components/Banner.jsx';
import Header from './components/Header.jsx';
import Topheader from './components/Topheader.jsx';
import './App.css';
import Sidebar from "./components/Sidebar.jsx";
import LoginSignup from "./components/LoginSignup.jsx"

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

    </>
  )
}

export default App
