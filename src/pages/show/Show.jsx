import React from 'react'
import { useParams } from 'react-router';
import ShowCard from '../../components/showCard/ShowCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Show.css'
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { MdCancel } from "react-icons/md";



export default function Show() {
    const {id} = useParams();
    const shows = useSelector(state => state.showsData.shows)
    const show = shows.filter(show => show.show.id == id)[0];
    console.log(show)
    const [showform, setShowForm] = useState(false);
   const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    city:''
   })
  
   const handleChanges = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className='showContainer'>
      {showform && (<div className='formContainer'>
         <div className='form'>
          <div className='imageCont'>
            {show.show.name}
          </div>
          <div className='formBox'> 
            <div className='formHead'>
              Book Now !
              </div>
            <form onSubmit={(event)=>{
              event.preventDefault()
              console.log(formData)
              setShowForm(false)
              setFormData({
                name:'',
                email:'',
                phone:'',
                city:''
               })
            }}>
              <button className='cancel' onClick={()=>{
                setShowForm(false)
              }}>
                <MdCancel style={{color:'white',fontSize:'25px'}}/>
              </button>
              <label htmlFor="name">Name</label>
              <input 
                   type="text"
                   placeholder='Name' 
                   className='formInput'
                   name='name'
                   value={formData.name}
                   onChange={(event)=>{
                    handleChanges(event)
                   }}/>
              <label htmlFor="email">Email</label>
              <input 
                   type="text"
                   placeholder='Email'
                    className='formInput'
                    name='email'
                    value={formData.email}
                    onChange={(event)=>{
                      handleChanges(event)
                     }}  />
              <label htmlFor="phone">Phone</label>
              <input 
                   type="text"
                   placeholder='Phone'
                    className='formInput'
                    name='phone'
                    value={formData.phone}
                    onChange={(event)=>{
                      handleChanges(event)
                     }} />
              <label htmlFor="city">City</label>
              <input 
                   type="text"
                   placeholder='city' 
                   className='formInput'
                   name='city' 
                   value={formData.city}
                   onChange={(event)=>{
                    handleChanges(event)
                   }} />
              <button type='submit' className='formButton'>Book Now</button>
            </form>
          </div>
         </div>
      </div>)}
       <div className='imageContainer'>
        <img src={show.show.image?.original} alt="show image not available" className='image' />
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
             <div className='showPremeir'>{show.show.premiered?.slice(0,4)}</div>
             <div className='showGenre'>{show.show.genres?.map((genre,i)=>{
                  if(i===0){
                      return <span key={i}>{genre}</span>
                  }
             })}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: show.show.summary }} className='description'/>
          
        <div className='book'> 
            <button to='/' onClick={()=>{
              setShowForm(true) 
            }} className='bookButton'>Book ticket </button>
        </div>
       </div>
    </div>
  )
}
