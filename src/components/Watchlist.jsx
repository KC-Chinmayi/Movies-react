import React, { useState, useEffect } from 'react'
import genreids from  './Utility/genre'

const Watchlist = ({watchlist,setWatchList,handleRemoveFromWatchList}) => {

const [search,setSearch]=useState('')
const [genres,setGenres]=useState(["All Genres"])
const [currentGenre,setCurrentGenre]=useState("All Genres")

let handleSearch =(e)=>{
  setSearch(e.target.value)
}

// Remove movie
let removeFromWatchList = (movieObj) => {
  let filtered = watchlist.filter((movie) => movie.id !== movieObj.id)
  setWatchList(filtered)
}

// Sorting functions
let sortIncreasing=()=>{
  let sortedIncreasing=[...watchlist].sort((movieA,movieB) => movieA.vote_average - movieB.vote_average)
  setWatchList(sortedIncreasing)
}

let sortDecreasing=()=>{
   let sortedDecreasing=[...watchlist].sort((movieA,movieB) => movieB.vote_average - movieA.vote_average)
   setWatchList(sortedDecreasing)
}

// Generate dynamic genre list when watchlist updates
useEffect(()=>{
  let temp = watchlist.map(movie => genreids[movie.genre_ids[0]])
  temp = new Set(temp) // remove duplicates
  setGenres(["All Genres", ...temp])
},[watchlist])

  return (
   <>
    {/* Genres Filter */}
    <div className='flex justify-center text-wrap m-4 flex-wrap'>
      {genres.map((g, index)=>(
        <div 
          key={index}
          onClick={()=>setCurrentGenre(g)}
          className={currentGenre === g 
          ? 'flex justify-center rounded-xl bg-blue-400 h-[3rem] w-[9rem] text-white font-bold items-center mx-4 my-4 cursor-pointer'
          : 'flex justify-center rounded-xl bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold items-center mx-4 my-4 cursor-pointer'}
        >
          {g}
        </div>
      ))}
    </div>

{/* Search Box */}
   <div className='flex justify-center my-4'>
    <input 
    onChange={handleSearch} 
    value={search} 
    type="text" 
    placeholder='Search Movies' 
    className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
   </div>


{/* Table */}
   <div className='overflow rounded-lg border border-gray-200 m-8'>
    <table className='w-full text-gray-500 text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>Name</th>
          <th className='flex justify-center'>
         <div onClick={sortIncreasing} className='p-2 cursor-pointer'><i className="fa-solid fa-arrow-up"></i></div>
          <div className='p-2'>Ratings</div>
          <div onClick={sortDecreasing} className='p-2 cursor-pointer'><i className="fa-solid fa-arrow-down"></i></div>
          </th>
          <th>Popularity</th>
          <th>Genre</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>

        {watchlist.filter((movieObj)=>{

          // genre filter
          let matchesGenre = currentGenre === "All Genres" || genreids[movieObj.genre_ids[0]] === currentGenre

          // search filter
          let matchesSearch = movieObj.title.toLowerCase().includes(search.toLowerCase())

          return matchesGenre && matchesSearch
          
        }).map((movieObj)=>(
          
          <tr key={movieObj.id} className='border-b-2'>
          <td className='flex items-center px-6 py-4'>
            <img className='h-[6rem] w-[10rem]'  src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} />
            <div className='mx-10'>{movieObj.original_title}</div>
          </td>
          <td>{movieObj.vote_average}</td>
          <td>{movieObj.popularity}</td>
          <td>{genreids[movieObj.genre_ids[0]]}</td>
         <td onClick={() => handleRemoveFromWatchList(movieObj)} className='text-red-700 cursor-pointer'>
            Delete
         </td>

        </tr>
        ))}

      </tbody>
    </table>
   </div>
   </>
  )
}

export default Watchlist
