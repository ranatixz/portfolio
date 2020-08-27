import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/section-a/Home'
import About from './components/section-b/About'
import Services from './components/section-c/Services'
import Portfolio from './components/section-d/Portfolio'

const App = () =>{
  return (
      <React.Fragment>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
      </React.Fragment>
  )
}

export default App
