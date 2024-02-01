import React from 'react'
import { Outlet } from 'react-router'
import './Wrapper.css'
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate,useLocation } from 'react-router';


export default function Wrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='wrapper'>
        <div className='header'> 
         {location.pathname !== '/' && (<button className='backButton' onClick={()=>{
          navigate(-1)
         }}> <MdKeyboardBackspace /> </button>)}
         <div className='headingText'> Top Movies </div>
        </div>
        <Outlet />
    </div>
  )
}
