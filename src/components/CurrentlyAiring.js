import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import AnimeAir from './AnimeAir';

export default function CurrentlyAiring() {

  const { isLoading, error, data, } = useQuery(["animeAir"], () =>
  axios
    .get('https://api.jikan.moe/v4/seasons/now')
    .then((res) => res.data) 
);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error){
    return <div>Error! {error.message}</div>
  }
return(
 <div>
  {data.data && data.data.map((animeAir) =>(
<AnimeAir animeAir={animeAir}/>
  ))
}
</div>)};