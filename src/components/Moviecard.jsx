import React from 'react'


const Moviecard = ({poster_path,name,handleAddtoWatchList,movieObj,handleRemoveFromWatchList,watchlist}) => {//Moviecard component to display individual movie cards
  

function doesContain(movieObj){

for(let i=0;i<watchlist.length;i++)
{
  if(watchlist[i].id == movieObj.id){
    return true;
  }
}
  return false;
}
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${poster_path})`}}> 
    
    {doesContain(movieObj)?
    <div onClick={()=>(handleRemoveFromWatchList(movieObj))} className='m-4 flex justify-center rounded-lg h-8 w-8 bg-gray-900/60'>
        &#10060;
    </div>:
    <div onClick={()=>(handleAddtoWatchList(movieObj))} className='m-4 flex justify-center rounded-lg h-8 w-8 bg-gray-900/60'>
       &#128278;
    </div>
  }
    <div className='text-white text-xl bg-gray-900/60 w-full text-center rounded-b-xl p-2'>
      {name}
    </div>
    </div>
  )
}


export default Moviecard
