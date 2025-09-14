import React from 'react'
import Moviecard from './Moviecard'

const Movies = () => {//Movies component to display a list of movie cards
  return (
    <div className='p-5'>
       <div className='text-2xl font-bold text-center m-5'>Trending Movies</div>
   
        <div className='flex flew-row flex-wrap justify-around gap-7'>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>  
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>  
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>        
        </div>
   
    </div>
  )
}

export default Movies