import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AnimeMap from "./TopAnime";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, } from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'

export default function AnimeFinal() {
  
 const [search, setSearch]=useState('')
 console.log(search)

  const { isLoading, error, data: dataTop, isFetching } = useQuery(["animeData"], () =>
    axios
      .get(`https://api.jikan.moe/v4/top/anime?q=${search}`)
      .then((res) => res.data)
      
  );
  const { data: dataAir } = useQuery(["animeAir"], () =>
    axios
      .get(`https://api.jikan.moe/v4/seasons/now?q=${search}`)
      .then((res) => res.data)
      
  );
  const { data: dataAnime, refetch} = useQuery(["animeAnime",], () =>
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}`)
      .then((res) => res.data),
      // {refetchInterval: 2000,}
      // {enabled: false,}
  );
  const { data: dataRec, } = useQuery(["animeRec"], () =>
    axios
      .get(`https://api.jikan.moe/v4/manga?=${search}`)
      .then((res) => res.data)
      
  );
    console.log(dataTop);
    console.log(dataAir);
    console.log(dataAnime);
    console.log(dataRec);
 
  
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
  const SlideLeftttt = () =>{
    let slider = document.getElementById('sliderrrr');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
const SlideRightttt = () => {
    let slider = document.getElementById('sliderrrr');
    slider.scrollLeft = slider.scrollLeft + 500;
}

  return (
    <> 
    <div className="body">
    <div className='background'>
      <input className="search" type="text" name="animename" placeholder="Search Anime..." onChange={(event)=>setSearch(event.target.value)}/>
      <button className="button-search" onClick={refetch}><FaSearch className="search-icon"/></button>
    </div>
    <div className="none">{isFetching ? "." : "Loading"}</div>
     
    <h1>Anime</h1>
    <div className="button">
    <button className="button-style" onClick={SlideRighttt}><BsFillArrowRightCircleFill className="icon"/></button>
    <button className="button-style" onClick={SlideLefttt}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="sliderrr">
    {dataAnime.data && dataAnime.data.map((animeAnime) => (
      <AnimeMap animeData={animeAnime}/>
    ))}</div>
    
    <h1>Manga</h1>
    <div className="button">
    <button className="button-style" onClick={SlideRightttt}><BsFillArrowRightCircleFill className="icon"/></button>
    <button className="button-style" onClick={SlideLeftttt}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="sliderrrr">
    {dataRec.data && dataRec.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    }).map((animeRec) => (
      <AnimeMap animeData={animeRec}/>
    ))}</div>
   
    

    <h1>Top Anime</h1>
    <div className="button">
    <button className="button-style" onClick={SlideRight}><BsFillArrowRightCircleFill className="icon"/></button>
    <button className="button-style" onClick={SlideLeft}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="slider">
    {dataTop.data && dataTop.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    })
    .map((animeData) =>(
            <AnimeMap key={animeData.mal_id} animeData={animeData}/>
          ))}</div>
          
    <h1>Currently Airing</h1>
    <div className="button">
    <button className="button-style" onClick={SlideRightt}><BsFillArrowRightCircleFill className="icon"/></button>
    <button className="button-style" onClick={SlideLeftt}><BsFillArrowLeftCircleFill className="icon"/></button>
    </div>
    <div className="grid-row" id="sliderr">
    {dataAir.data && dataAir.data.filter((item) => {
      return search.toLowerCase() ==='' ? item : item.title.toLowerCase().includes(search);
    })
    .map((animeAir) =>(
      <AnimeMap animeData={animeAir}/>
    ))}</div> 
    <div className="footer">
      <p className="footer-text">Clayton Crowley <br></br>
      Project for fellow anime lovers</p>
    </div>
   </div>

    </> 
    
  );
}