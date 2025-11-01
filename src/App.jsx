import React from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'
import { useState } from 'react'

const App = () => {

let [watchlist,setWatchList]=useState([])//state to manage the watchlist component

let handleAddtoWatchList=(movieObj)=>{//function
  let newWatchList=[...watchlist,movieObj]//spread operator to add new movie to the existing watchlist
  setWatchList(newWatchList)
  console.log(newWatchList);
}



let handleRemoveFromWatchList=(movieObj)=>{
  let filteredWatchList=watchlist.filter((movie)=>{
    return movie.id!=movieObj.id
  })
  setWatchList(filteredWatchList)
}

  return (
    <>
   <BrowserRouter>    
   {//wrapping all components in BrowserRouter for routing
   }
    <Navbar/>
    <Routes>
      <Route path='/' element={<> <Banner/> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/> </>}/>{/*handleAddtoWatchList-prop drilling*/}
      <Route path='/watchlist' element={<Watchlist/>}/>
    
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App