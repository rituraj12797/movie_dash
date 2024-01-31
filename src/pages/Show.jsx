import React from 'react'
import { useParams } from 'react-router';
import ShowCard from '../components/ShowCard';
import { useSelector } from 'react-redux';
export default function Show() {
    const {id} = useParams();
    console.log(id);
    const shows = useSelector(state => state.showsData.shows)
  return (
    <div>
      {
            shows.map((show,i)=>{
                if(show.show.id == id){
                    return <ShowCard show={show} key={i} />
                }
            })
      }
    </div>
  )
}
