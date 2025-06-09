import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";



const Topheader = () => {

  return (
    <>
        <div className='sm:max-flex-col md:flex justify-between bg-[#0D3F63] text-white sm:px-3 md:px-30 py-2.5 relative'>
            <div className='sm:max-flex-col md:flex gap-6' >
            <div className='flex justify-center items-center gap-3'>
                <IoIosCall size={20}/>
                <p>+91 9999999999</p>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <MdEmail size={20}/>
                <p>info@syolotravel.com</p>
            </div>
            
        </div>
        <div className='flex gap-6 justify-center'>
            <div className='flex items-center gap-3'>
                <p>About Us</p>
            </div>
            <div className='flex items-center gap-3'>
                <p>Contact Us</p>
            </div>
        </div>
        
        </div>
    </>
  )
}

export default Topheader