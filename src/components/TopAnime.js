import React from 'react'

export default function AnimeMap({ animeData }) {
  return (
    <div key={animeData.mal_id} className="center">
             <h2 className='heading'>{animeData.title}</h2>
             <img className='img' src={animeData.images.jpg.large_image_url} alt={animeData.title} />
             <p className='orange-text'>{animeData.status}</p>
            </div>
  )
}

