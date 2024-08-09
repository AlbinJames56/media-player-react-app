 

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Componets/Footer'
import Header from './Componets/Header'
import Home from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'

 
function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={ <WatchHistory/>}/>

    </Routes>
    
     
     
     <Footer/>
    </>
  )
}

export default App
