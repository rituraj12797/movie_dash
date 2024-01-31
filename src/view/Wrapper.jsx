import React from 'react'
import { Outlet } from 'react-router'

export default function Wrapper() {
  return (
    <div>
        <div className='header'> 
         <div> back </div>
         <div> TopMovies </div>
        </div>
        <Outlet />
    </div>
  )
}
