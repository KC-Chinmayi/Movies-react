import React, { useState } from 'react'
import genreids from  './Utility/genre'

const Watchlist = ({watchlist,setWatchList}) => {

const [search,setSearch]=useState('')


let handleSearch =(e)=>{
  setSearch(e.target.value)
}

let sortIncreasing=()=>{
  let sortedIncreasing=watchlist.sort((movieA,movieB) => {
      return movieA.vote_average-movieB.vote_average
  })
  setWatchList([...sortedIncreasing])
}



let sortDecreasing=()=>{
   let sortedDecreasing=watchlist.sort((movieA,movieB) => {
      return movieB.vote_average-movieA.vote_average
  })
  
setWatchList([...sortedDecreasing])
}


  return (
   <>
    {/*Genere part*/}
    <div className='flex justify-center text-wrap m-4'>
      <div className='flex justify-center overflow rounded-xl bg-blue-400 h-[3rem] w-[9rem] text-white font-bold items-center mx-4'>All Genere</div>
      <div className='flex justify-center overflow rounded-xl bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold items-center'>Action</div>
    </div>


{/* Table*/}
   <div className='flex justify-center my-4'>
    <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
   </div>
   <div className='overflow rounded-lg border border-gray-200 m-8'>
    <table className='w-full text-gray-500 text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>Name</th>
          <th className='flex justify-center'>
         <div onClick={sortIncreasing} className='p-2'><i className="fa-solid fa-arrow-up"></i></div>
          <div className='p-2'>Ratings</div>
          <div onClick={sortDecreasing} className='p-2'><i className="fa-solid fa-arrow-down"></i></div>
          </th>
          <th>Popularity</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {/*1st row */}

        {watchlist.filter((movieObj)=>{
          return movieObj.title.toLowerCase().includes(search.toLowerCase())
        }).map((movieObj)=>{
          return   <tr key={movieObj.id} className='border-b-2'>
          <td className='flex items-center px-6 py-4'>
            <img className='h-[6rem] w-[10rem]'  src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} />
            <div className='mx-10'>{movieObj.original_title}</div>
          </td>
          <td>
            {movieObj.vote_average}
          </td>
        <td>{movieObj.popularity}</td>
        <td>{genreids[movieObj.genre_ids[0]]}</td>{/*gives genere id*/}
        <td className='text-red-700'>
          Delete
        </td>
        </tr>
        })}

      </tbody>
    </table>
   </div>
   </>
  )
}

export default Watchlist