import React,{useState} from 'react';
import logo from "../assets/images/logo.png";
import { IoCaretDownSharp } from "react-icons/io5";



const Sidebar = ({SidebarProps}) => {
    const [setShowSidebar,showSidebar]=SidebarProps;
    const [openMenus, setOpenMenus] = useState({
    menu1: false,
    submenu12: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-300/50 transition-all flex justify-end overflow-hidden' onClick={()=>{setShowSidebar(false)}}>
            <div className="shadow w-[65vw] md:w-[25vw] h-[100vh] bg-white px-2 py-5 rounded-tl-2xl rounded-bl-2xl" onClick={(event)=>{event.stopPropagation()}}>
                    <div>
                        <img src={logo}  className='w-22 mx-auto'/>
                    </div>
                    <div>
                        <div className=" ">
      <ul className="space-y-2">
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">MENU 1</a>
        </li>

        {/* Menu 1 with children */}
        <li>
          <button
            onClick={() => toggleMenu('menu1')}
            className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            MENU 2
            <span className={`transform transition-transform ${openMenus.menu1 ? 'rotate-90' : ''}`}><IoCaretDownSharp /></span>
          </button>

          {openMenus.menu1 && (
            <ul className="pl-6 mt-1 space-y-1">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  MENU 2 item 1
                </a>
              </li>

              {/* Submenu 1.2 with 2nd-level children */}
              <li>
                <button
                  onClick={() => toggleMenu('submenu12')}
                  className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                >
                  MENU 2 item 2
                  <span className={`transform transition-transform ${openMenus.submenu12 ? 'rotate-90' : ''}`}><IoCaretDownSharp /></span>
                </button>

                {openMenus.submenu12 && (
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded">
                        MENU 2 item 2 item 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded">
                        MENU 2 item 2 item 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">MENU 3</a>
        </li>
      </ul>
    </div>
    

                    </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar