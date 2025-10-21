import React from 'react'

const Moviecard = ({poster_path,name}) => {//Moviecard component to display individual movie cards
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${poster_path})`}}> 
    
    <div className='text-white text-xl bg-gray-900/60 w-full text-center rounded-b-xl p-2'>
      {name}
    </div>
    </div>
  )
}

export default Moviecard