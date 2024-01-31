import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ShowCard({show}) {
  return (
    <div>
       <div >
        <img src={show.show.image?.medium} alt="show" />
         <div> {show.show.name}</div>
         <div> {show.show.genres.map((genre,i)=>{
            return (<span key={i}>{genre}</span>)
         })}</div>
       </div>
       <div>
        <FaStar />
       { ((show.score.toFixed(3
        ))*10).toFixed(2)}
       </div>
       <Link to={'dashboard/' + show.show.id}> watch now</Link>
       <br></br>
       <br></br>

    </div>
  )
}
