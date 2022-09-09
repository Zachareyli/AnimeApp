import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AnimeMap from "./TopAnime";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'


export default function AnimeFinal() {
  
 const [search, setSearch]=useState('')
 console.log(search)

  const { isLoading, error, data, isFetching, } = useQuery(["animeData"], () =>
    axios
      .get(`https://api.jikan.moe/v4/top/anime?q=${search}`)
      .then((res) => res.data)
      
  );
    console.log(data);
 
  
    if (isLoading) {
      return <div>Loading...</div>
  }
  if (error) {
      return <div>Error! {error.message}</div>
  }

  const SlideLeft = () =>{
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
const SlideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
}
  const SlideLeftt = () =>{
    let slider = document.getElementById('sliderr');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
const SlideRightt = () => {
    let slider = document.getElementById('sliderr');
    slider.scrollLeft = slider.scrollLeft + 500;
}
  const SlideLefttt = () =>{
    let slider = document.getElementById('sliderrr');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
const SlideRighttt = () => {
    let slider = document.getElementById('sliderrr');
    slider.scrollLeft = slider.scrollLeft + 500;
}

  return (
    <> 
    <div className="body">
    <input type="text" placeholder="Search Anime..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <div className="none">{isFetching ? "." : "Loading"}</div>
    <h1>Top Anime</h1>
    <div className="button">
    <button onClick={SlideRight}><BsFillArrowRightCircleFill className="icon"/></button>
    <button onClick={SlideLeft}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="slider">
    {data.data && data.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    })
    .map((animeData) =>(
            <AnimeMap animeData={animeData}/>
          ))}</div>
          
    <h1>Currently Airing</h1>
    <div className="button">
    <button onClick={SlideRightt}><BsFillArrowRightCircleFill className="icon"/></button>
    <button onClick={SlideLeftt}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="sliderr">
    {data.data && data.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    })
    .map((animeData) => (
      <AnimeMap animeData={animeData}/>
    ))}</div>
    
    <h1>Recommended</h1>
    <div className="button">
    <button onClick={SlideRighttt}><BsFillArrowRightCircleFill className="icon"/></button>
    <button onClick={SlideLefttt}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="sliderrr">
    {data.data && data.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    }).map((animeData) => (
      <AnimeMap animeData={animeData}/>
    ))}</div>
    <div className="footer">
      <p className="footer-text">Clayton Crowley <br></br>
      Project for fellow anime lovers</p>
    </div>
    </div>
    </>
  );
}