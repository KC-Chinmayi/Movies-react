import React from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'
import { useState , useEffect } from 'react'

const App = () => {

let [watchlist,setWatchList]=useState([])//state to manage the watchlist component

let handleAddtoWatchList=(movieObj)=>{//function
  let newWatchList=[...watchlist,movieObj]//spread operator to add new movie to the existing watchlist
  setWatchList(newWatchList)
  localStorage.setItem('moviesApp',JSON.stringify(newWatchList))//storing watchlist in the local storage as key value pair 
  //// Save the updated watchlist in localStorage as a JSON string so data persists even after page reload
  console.log(newWatchList);
}



let handleRemoveFromWatchList=(movieObj)=>{
  let filteredWatchList=watchlist.filter((movie)=>{
    return movie.id!=movieObj.id
  })
  setWatchList(filteredWatchList)
}
//use effect is used to fetch data from local storage if it exists
useEffect( ()=>{
  let moviesFromLocalStorage=localStorage.getItem('moviesApp')
if(!moviesFromLocalStorage){
  return
}
setWatchList(JSON.parse(moviesFromLocalStorage))},[])//dependency array [] runs only once after the first render (on mount)


  return (
    <>
   <BrowserRouter>    
   {/*wrapping all components in BrowserRouter for routing*/}
    <Navbar/>
    <Routes>
      <Route path='/' element={<> <Banner/> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/> </>}/>{/*handleAddtoWatchList-prop drilling*/}
      <Route path='/watchlist' element={<Watchlist watchlist={watchlist}/>}/>
    
    </Routes>
   </BrowserRouter>
    </>
  )
}



export default App