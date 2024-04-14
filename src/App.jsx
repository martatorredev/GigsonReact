import './App.css'
import Form from './components/Form'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutHero from './components/AboutHero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <Navbar/>
      <Router>
        <Routes> 
          <Route exact path='/'      element={<Home/>}/>          
          <Route exact path='/about' element={<AboutHero/>}/>
        </Routes>
      </Router>
      <Footer/>       
    </>
  )
}

export default App
