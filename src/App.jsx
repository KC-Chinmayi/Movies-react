import React from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'


const App = () => {
  return (
    <>
   <BrowserRouter>    
   {//wrapping all components in BrowserRouter for routing
   }
    <Navbar/>
    <Routes>
      <Route path='/' element={<> <Banner/> <Movies/> </>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
    
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App