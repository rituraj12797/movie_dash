import React from 'react'
import { useEffect } from 'react';
import ShowCard from '../components/ShowCard';
import { useDispatch, useSelector } from 'react-redux';
import { setShows } from '../state/showData/ShowData';
export default function Dashboard() {
    const showsData = useSelector(state => state.showsData.shows)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const apiFetch = async () => {
            try {
                const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
                const data = await res.json()
                dispatch(setShows(data))
            } catch (error) {
                console.log("error occured" , error)
            }
        }
        apiFetch();
    },[])

    useEffect(()=>{
        console.log(showsData)
    },[showsData])
  return (
    <div>
        <div>
            {
                showsData.map((show,i)=>{
                    return <ShowCard show={show} key={i} />
                })
            }
        </div>
    </div>
  )
}
