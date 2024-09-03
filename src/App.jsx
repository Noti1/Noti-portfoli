import React from 'react'
import './App.css'
import Navgation from './Components/navgation/Navgation'
import Hero from './Container/hero/Hero'
import Projects from './Container/projects/Projects'
import Service from './Container/service/Service'
import Footer from '../src/Components/Footer';
import ScrollIcon from '../src/Components/ScrollIcon'

function App() {
  return (
    <div className="App">
     <div className="header">
       <Navgation/>
       <Hero/>
       <ScrollIcon/>
     </div>
     <div className="main">
       <Service/>
       <Projects/>
       <Footer/>
     </div>
     
    </div>
  )
}

export default App
