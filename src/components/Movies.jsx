import React from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'

const Movies = ({handleAddtoWatchList,handleRemoveFromWatchList,watchlist}) => {//Movies component to display a list of movie cards
 
const [movies,setMovies]=React.useState([])//holds list of movies fetched from the api
const [pageNo, setPageNo] = useState(1);


  const handlePrev = () => {
    if(pageNo==1){
      setPageNo(1)//or setPageNo(pageNo)
    }else{
      setPageNo(pageNo - 1)
    }
  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(()=>{

     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`)//replace with ypor api key
  .then(res => setMovies(res.data.results))
  },[pageNo])
 
  console.log({ movies });
 
  return (
    <div className='p-5'>
       <div className='text-2xl font-bold text-center m-5'>Trending Movies</div>
   
        <div className='flex flex-row flex-wrap justify-around gap-8 m-5'>
          
          {movies.map((movieObj)=>{// Maps over the movies array and renders a Moviecard for each movie with its poster and title 
            return <Moviecard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>//prop drilling 
          //Prop drilling means passing data (props) from a parent component → through multiple layers of child components → to reach a deeply nested component that actually needs it.
          }
        )
        }
        </div>
   <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo}/>

    </div>
  )
}

export default Movies

