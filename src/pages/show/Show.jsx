import React from 'react'
import { useParams } from 'react-router';
import ShowCard from '../../components/showCard/ShowCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Show.css'
import { FaStar } from 'react-icons/fa';
im
export default function Show() {
    const {id} = useParams();
    console.log(id);
    const shows = useSelector(state => state.showsData.shows)
    const show = shows.filter(show => show.show.id == id)[0];
    console.log(show)
  return (
    <div className='showContainer'>
      <div className='formContainer'>
         <div className='form'>
          <div className='imageCont'>
            {show.show.name}
          </div>
          <div className='formBox'></div>
         </div>
      </div>
       <div className='imageContainer'>
        <img src={show.show.image?.original} alt="show image" className='image' />
       </div>
       <div className='details'>
         <div className='showHead'>
         {show.show.name}
         </div>

        <div className='showExtras'>
             <div className='showRat'>
             <div className='starContainer'>
               <FaStar style={{color:'rgb(255, 153, 0)'}}/>
             </div>
             {((show.score.toFixed(3)) * 10).toFixed(2)}
              </div>
             <div className='showPremeir'>{show.show.premiered.slice(0,4)}</div>
             <div className='showGenre'>{show.show.genres.map((genre,i)=>{
                  if(i===0){
                      return <span key={i}>{genre}</span>
                  }
             })}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: show.show.summary }} className='description'/>
          
        <div className='watch'> 
            <Link to='/'>Book ticket </Link>
        </div>
       </div>
    </div>
  )
}
