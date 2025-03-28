import React, { useState, useEffect } from 'react'
import axios from 'axios'
//react player for trailers
import ReactPlayer from "react-player";
import requests from '../../Request'

const RPlayer = ({movieItem, type}) => {
  const[movie, setMovie] = useState([])
  const[finished, setFinished] = useState(false)
  let trailer = ""
  let found = {}

  useEffect(() =>{
    const id = movieItem.id;
    const key = process.env.REACT_APP_IMDB_API_KEY; 

    if(type === "movie"){
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US&append_to_response=videos`).then((response) =>{
        setMovie(response.data.results)
      })
    }else{
      axios.get(`https://api.themoviedb.org/3/tv/${id}/season/1/videos?api_key=${key}&language=en-US`).then((response) =>{
        setMovie(response.data.results)
      })
    }
  },[movieItem.id, type])

  if(type === "movie"){
    found = movie.find(element => element.name === "Official Trailer")

    if(!found || found.name !== "Official Trailer"){
      found = movie.find(element => element.name.includes("Official Trailer"))
    }else if(!found){
      found = movie.find(element => element.name)
    }else{
      trailer = found.key;
    }
  }else{
    found = movie.find(element => element.name.includes("Trailer")) || movie.find(element => element.name.includes("Peek")) || movie.find(element => element.name);

    if(found){
      trailer = found.key;
    }
  }

  const handleEndingTrailer = () => {
    setFinished(true)
  }

  return (
    <>
    {trailer && !finished ?  
      <ReactPlayer
        url={`${requests.YOUTUBE_URL}${trailer}`}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              autoplay: 1,
              modestbranding: 1,
              iv_load_policy: 3,
              showinfo: 0,
              fs:0,
              cc_load_policy: 0
            },
          embedOptions: {
           controls: 0,
              autoplay: 1,
              modestbranding: 1,
              iv_load_policy: 3,
              showinfo: 0,
              fs:0,
              cc_load_policy: 0
          },
          }
          
        }}
        playing={true}
        volume={1}
        width="50vw"
        height="50vh"
        onEnded={handleEndingTrailer}
        onError={handleEndingTrailer}
      />
    : 
      <img className="w-full block" src={`https://image.tmdb.org/t/p/w500${movieItem?.backdrop_path}`} alt={movieItem?.title ? movieItem?.title : movieItem?.name} />}
    </>
  )
}

export default RPlayer