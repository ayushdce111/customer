import { useState } from 'react'
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6';
import Slider from 'react-slick';
import {NextArrow,PrevArrow} from "./BannerArrows.jsx";
import bannerdemo from "../../assets/images/bannerdemo.png";
import bannerdemo1 from "../../assets/images/bannerdemo1.png";
import bannerdemo2 from "../../assets/images/bannerdemo2.png";
import "../../assets/css/Banner.css"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <ul style={{ margin: 0 }}>{dots}</ul>
    </div>
  ),
  };

const Banner = () => {

  
  return (
    <>
    <div style={{ width: '100%', margin: '0 auto',position:"relative" }} className=''>
     
      <Slider {...settings}>
        <div className='h-[35vh] md:h-[75vh]'><img src={bannerdemo} alt="Slide 1" style={{width:"100%",height:"100%",objectFit:"cover",position:"relative"}}/></div>
        <div className='h-[35vh] md:h-[75vh]'><img src={bannerdemo1} alt="Slide 2" style={{width:"100%",height:"100%",objectFit:"cover",position:"relative"}}/></div>
        <div className='h-[35vh] md:h-[75vh]'><img src={bannerdemo2} alt="Slide 3" style={{width:"100%",height:"100%",objectFit:"cover",position:"relative"}}/></div>
      </Slider>
    </div>
    </>
  )
}

export default Banner
