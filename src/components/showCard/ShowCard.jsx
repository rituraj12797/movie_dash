import React from 'react'
import { FaStar,FaPlay  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ShowCard.css'

export default function ShowCard({ show }) {
  return (
    <div className='card' style={{ backgroundImage: `url(${show.show.image?.medium})` }}>
      <div className='cardInfo'>
        <div className='showInfo'>
          <div className='showName '>
            <div> {show.show.name}</div>
          </div>
          <div className='ratCat'>
            <div className='rating'>
              <FaStar style={{color:'rgb(255, 153, 0)'}}/>
              {((show.score.toFixed(3)) * 10).toFixed(2)}
            </div>
            <div className='genre'>{show.show.genres.map((genre, i) => {
              if (i===0) {
                return (<span key={i}>{genre}</span>)
              }
            })}</div>
          </div>
        </div>
        <Link to={'dashboard/' + show.show.id}> 
        <div className='play'>
        <FaPlay />
          </div></Link>
      </div>
    </div>
  )
}
