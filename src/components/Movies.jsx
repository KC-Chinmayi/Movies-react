import React from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Movies = () => {//Movies component to display a list of movie cards
 
const [movies,setMovies]=React.useState([])//holds list of movies fetched from the api

  useEffect(()=>{

     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=5`)//replace with ypor api key
  .then(res => setMovies(res.data.results))
  },[])
 
 
 
  return (
    <div className='p-5'>
       <div className='text-2xl font-bold text-center m-5'>Trending Movies</div>
   
        <div className='flex flex-row flex-wrap justify-around gap-8 m-5'>
          
          {movies.map((movieObj)=>{// Maps over the movies array and renders a Moviecard for each movie with its poster and title 
            return <Moviecard  key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title}/>//3 pros are passed,unique key, poster_path gives image path and name gives movie title
          }
        )
        }
        </div>
   
    </div>
  )
}

export default Movies

